const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publishermodel = require("../models/PublishreModule")

// Q.-  Write a POST api that creates a publisher from the details in the request body
// 3. Write a POST api that creates a book from the details in the request body. The api takes both the author and publisher from the request body. 
// In this api, you have to write a logic that validates the following :
// The authorId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the authorId is a valid ObjectId in the author collection. If not then send an error message that the author is not present.
// The publisherId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.

const createBook= async function (req, res) {
    let book = req.body
    let id1 = req.body.author
    let authorid = await authorModel.find({ _id: id1 }).select({ _id: 1 })
    let id2 = req.body.publisher
    let publisherid = await publishermodel.find({ _id: id2 })
    if ((!id1) && (!id2))  {
        res.send("author id And Publisher id is require")
    } else if (!id1) {
        res.send("author id is require")
    } else if (authorid.length == 0) {
        res.send("This Author is not present")
    } else if (!id2) {
        res.send("Publisher id is require")
    } else if (publisherid.length == 0) {
        res.send("This publisher is not present")
    } else {
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}
}

 

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}
// Q. 4 -  Write a GET api that fetches all the books along with their author details (you have to populate for this) as well the publisher details (you have to populate for this) 

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate("author").populate("publisher")
    res.send({data: specificBook})

}


// Q - 5- // b- 

const UpdatePrice  = async function (req, res) {
    let incresear = await authorModel.find({rating:{$gt: 3.5} })
    let newincresear=[]
    for(i of incresear){
        abc=i._id
      
       let tosend= await bookModel.findOneAndUpdate(
            {author:abc},
            {$inc:{"price":10}},
            {new:true} 
        )
        newincresear.push(tosend)
       }
       res.send({mess:newincresear})
}
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.UpdatePrice = UpdatePrice

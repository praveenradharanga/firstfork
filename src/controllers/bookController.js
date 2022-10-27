const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find(  { authorName : "SK" , isPublished: true }  )
    res.send({msg: allBooks})
}
const bookList = async function (req, res) {
    let listBooks = await BookModel.find().select({bookName:1, authorName:1, _id:0})
    res.send({msg: listBooks})
}
const getBooksInYear = async function (req, res) {
    let year = req.body
    let Books = await BookModel.find(year)
    res.send({msg: Books})
}
const getParticularBooks = async function (req, res) {
     
    let exactBook = await BookModel.find({year:2020})
    res.send({msg: exactBook})
}

const getXINRBooks = async function (req, res) {
   // let INR = await BookModel.find({indianPrice: {$in:['100INR', '200INR', '500INR']}})
   let INR = await BookModel.find({  "price.indianPrice" : {$in:['100INR','200INR','500INR']}  })
    res.send({msg: INR})
}
const getRandomBooks = async function (req, res) {
    let randombooks = await BookModel.find({$or: [{stockAvailable:true},{totalPages:{$gt:500}}]})
    res.send({msg: randombooks })
}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.bookList =  bookList
module.exports. getBooksInYear =   getBooksInYear
module.exports. getParticularBooks = getParticularBooks
module.exports. getXINRBooks = getXINRBooks
module.exports. getRandomBooks = getRandomBooks




const express = require('express');
const abc = require('../introduction/intro')
//const cinema = require('../movies/movies')
const router = express.Router();

/*router.get('/movies/:indexNumber',cinema.indexNumber)
router.get('/cult',cinema.cult)
router.get('/idvalue',cinema.idValue)*/

//________________________________1st problem___________________________
/*1. Create an API for GET /movies that returns a list of movies. Define an array of
movies in your code and return the value in response.*/

const arrayMovies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
router.get('/movies', function (req, res) { //query
 res.send(arrayMovies)
});

//________________________________2nd 3rd problem___________________________

const indMovies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]

router.get('/movies/:indexNumber', function (req, res) { //param
    const index = req.params.indexNumber
    if((index) > (indMovies.length -1) ){
        res.send("invalid index value")
    } else {
        res.send(indMovies[index])
    }

 });
   
  //router.get('/films/:filmId', function (req, res) { //param

 let classics = [ {
    "id": 1,
    "name": "The Shining"
    }, {
    "id": 2,
    "name": "Incendies"
    }, {
    "id": 3,
    "name": "Rang de Basanti"
    }, {
    "id": 4,
    "name": "Finding Nemo"
}] 
   /* router.get('/films', function (req, res) { //query
    res.send(classics)
    
   /* function me(){
        return classics
    }
    /*function idValue (){
        let idValue = req.params.idValue
        if(idValue>classics.id.length-1||idValue<=0){
           res.send("invalid id value")
        }
        res.send(classics[idValue])
     } 
    */
    

//________________________________3rd problem___________________________

/*const movieArr = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]

router.get('/movies/:indexNumbers', function (req, res) { //param
    
    const index = req.params.indexNumbers
    
    if((index) > (movieArr.length -1) ){
    res.send("invalid index value")
} else {
    res.send(movieArr[index])
}
})*/

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){ //query
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
});


//--------------------------problem 2--------------------------

/*router.get('/movies/:indexNumber', function(req, res){ //param
    console.log("creating movies array : ", req.index.params)
    let movies = ['Rang de basanti','The shining','Lord of the rings','Batman begins']
    res.send(movies)
});


router.get('/movies/:indexNumber', function(req, res){ //param
    let movieIndex = ['Rang de basanti','The shining','Lord of the rings','Batman begins']
    const index = req.params.index
    res.send(movieIndex[index])

      //--------------------------problem 3--------------------------
      function indexNumber(req,res){
         indexNumber =req.params.indexNumber
        if(indexNumber> me.length||indexNumber<0){
            res.send("Please give us a valid number so we can able to share a correct detalis ")
        }
        res.send(me[indexNumber])
        }
      
});*/ 



// Example 1 for path params
router.get('/students/:studentName', function(req, res){ //path param
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){ //param
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

module.exports = router;
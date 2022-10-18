const express = require('express');
const abc = require('../introduction/intro')
const cinema = require('../movies/movies')
const router = express.Router();

router.get('/movies/:indexNumber',cinema.indexNumber)
router.get('/cult',cinema.cult)
router.get('/idvalue',cinema.idValue)



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
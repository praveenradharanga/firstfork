const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const lgr = require('../logger/logger')
const hlpr = require('../util/helper')
const frmtr = require('../validator/formatter')

//importing external package
const underscore = require('underscore')
const lodash = require('lodash')

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("Calling my function ",lgr.WelCome())
    console.log("The value of the constant is ",lgr.myUrl)
    console.log("Calling my date ",hlpr.DATE)
    console.log("Calling my function ",hlpr.BatchInfo())
    console.log("Calling my function ",frmtr.CaseSence)



    //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)
    
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')

    // loadash problems
    const_ =require('lodash')
const month1=["January","February","March","April","May","June","july","August","September","October","November","December"];
console.log(_.chunk(month1,4))

const oddNum=[1,3,5,7,9,11,13,15,17,19];
console.log(_.tail(oddNum,9));

const Num=[2,5,4,2,7]
console.log(_.union(Num));

const keyValue=[['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]

console.log(_.fromPairs(keyValue));

});

module.exports = router;


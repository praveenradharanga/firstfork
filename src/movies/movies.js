//--------------------------problem 1--------------------------
/*router.get('/movies', function (req, res){ //movie array
    console.log("creating movies array : ", req.params)
    let movies = ['Rang de basanti','The shining','Lord of the rings','Batman begins']
    res.send(movies)
});*/

let chitra = ['Rang de basanti','The shining','Lord of the rings','Batman begins']
   function movies(req, res){
    return chitra
   } 

   function indexNumber(){
    let indexNumber = req.params.indexNumber
    if (indexNumber>chitra.length-1||indexNumber<0){
        res.send("Invalid index number")
    }
    res.send(chitra[indexNumber])
}


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


    function cult(){
        return classics
    }
 

    function idValue(){
        let idValue = req.params.idValue
        if(idValue>classics.id.length-1||idValue<=0){
           res.send("invalid id value")
        }
        res.send(classics[idValue])
     } 


 module.exports.movies = movies 
 module.exports.indexNumber = indexNumber
 module.exports.cult = cult 
 module.exports.idValue = idValue
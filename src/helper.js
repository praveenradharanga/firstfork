
const date = new Date();
let day = date.getDate();
let month = date.getMonth();
let raaju = `day is ${day}, month is ${month}`
    console.log(raaju); 
   let Myinfo={
    name:"praveen",
    week:"W4D4",
    topic:"the topic for today is Nodejs module system"
   }
    function InFo() {
        console.log(`${Myinfo.name},${Myinfo.week},${topic}`)
     }
    


    
// let info = `day is${day}, month is${month}`;
module.exports.DATE =  date
module.exports.BatchInfo = InFo



 const today = new Date()
 const day = today.getDate()        
 const month = today.getMonth()    
 const year = today.getFullYear()
 
 console.log(day);
 console.log(month);
 console.log(year);
 
 const getInfo={
     name:"praveen",
     week:'W4D4',
     topic:'Todays Node js Topic -- How to create Module and Export it.',
 }
 
 function getBatchInfo(){
     console.log(`${getInfo.name} , ${getInfo.week} , ${getInfo.topic} `)
 }
 
 getBatchInfo()
 

    
// let info = `day is${day}, month is${month}`;
module.exports.DATE =  today
module.exports.BatchInfo = getBatchInfo


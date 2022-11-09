const mongoose = require('mongoose');


const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile:Number,
    emailId: {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    gender:{
        type:String,
        enum:['male','female','others']
    },
    age:Number,
    posts: {
        type:[],
        default:[]
    }
}, {timestamps:true})

module.exports = mongoose.model('User', userSchema)
// module.exports = mongoose.model('User',userSchema) // users



// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,

//         required: true
//     },
//     emailId: String,
//     password: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "other"]
//     },
//     age: Number,
//     posts: {type: [], deafult: []}
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema)
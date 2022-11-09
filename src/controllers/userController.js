const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


// Q 1- Write a **POST api /users** to register a user from the user details in request body.
//  Solution =>

const createUser = async function(req,res) {
  let Data = req.body
  let createuser = await userModel.create(Data)
  res.send({msz: createuser})
}

   // <<<<<<<<<----------------------------------------------------->>>>>>>>>>>>


// Q 2 - Write a ***POST api /login** to login a user that takes user details - email and password from the request body. If the credentials don't match with any user's data return a suitable error.
// On successful login, generate a JWT token and return it in response body. Example 
//  Solution =>

const loginUser = async function(req,res) {

  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({emailId: userName , password: password})
  // console.log(user);
  if(!user)
  return res.send({
    status:false,
    msz: "User & password is not corrret"
  })

  // Create the jwt token nd sent it in response |
let token = await jwt.sign({userId: user._id.toString()},"atulsinghparihar")
// console.log(token);
res.send({status:true, data:token})
}


// <<<<<<<<<----------------------------------------------------->>>>>>>>>>>>


// Q 3-  Write a **GET api /users/:userId** to fetch user details. Pass the userId as path param in the url. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
// If present, check that the token is valid.
//  Solution =>

const getUserData = async function (req, res){  
    let userId = req.params.userId
    let userDetails = await userModel.findById(userId)
    if(!userDetails)
    return res.send({
      status: false ,
      msz: "User is not found"
    });
    res.send({status:true, data: userDetails})
}




// <<<<<<<<<----------------------------------------------------->>>>>>>>>>>>

// Q 4 - Write a **PUT api /users/:userId** to update user details. Pass the userId as path param in the url and update the attributes received in the request body. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
//  Solution =>

const updateUser = async function (req, res) {
  let message = req.body.message
  let userId = req.params.userId;
  let userDetails1 = await userModel.findById(userId)
  if (!userDetails1) {
    return res.send({
      satus:false,
      msz:"No such user exists"});
  }

  let updatedPosts = userDetails1.posts
  updatedPosts.push(message);
  let updatedUser = await userModel.findOneAndUpdate({_id: userDetails1._id},{posts: updatedPosts}, {new: true})
  return res.send({status: true, data: updatedUser})
}




// <<<<<<<<<----------------------------------------------------->>>>>>>>>>>>


// Q 5 - Write a **DELETE api /users/:userId** that takes the userId in the path params and marks the isDeleted attribute for a user as true. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
//  Solution => 

const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  if (!userId) {
    return res.send({
      satus:false,
      msz:"No such user exists"});
   }
  //  let find1 = await userModel.findOne({ _id: userId})
  //  console.log(find1);
  let  deleteUser = await userModel.findOneAndUpdate({  _id: userId },{$set:{isDeleted:true}},{new:true});
  res.send({status:true,msz:deleteUser})
  
}

// Q 6 - 

 
module.exports.createUser = createUser;
module.exports.loginUser = loginUser; 
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
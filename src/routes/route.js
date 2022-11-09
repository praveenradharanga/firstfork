const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const authMW = require("../middleware/authmiddleware")



router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)


router.get("/users/:userId",authMW.auth,userController.getUserData)

router.put("/users/:userId",authMW.auth,userController.updateUser)

router.delete("/users/:userId",authMW.auth,userController.deleteUser)

module.exports = router;

// Gautam - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY3YjhkYmYzY2M5YmY2N2YzMjhiZWQiLCJpYXQiOjE2Njc3NDIwMjF9.NCzE99rHZDBOFHDYfyWXR82NASQdE3eiBFu1QypEyuI

// rahul - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY3YjhmNmYzY2M5YmY2N2YzMjhiZWYiLCJpYXQiOjE2Njc3NDIwNzN9.4eLkCo9ksCOAlCYQAWnr8FBZMY1MEavynp_9oWdOY7I

// Atul - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY3YjkyOGYzY2M5YmY2N2YzMjhiZjEiLCJpYXQiOjE2Njc3NDIxMDl9.6QNSc6sbpvaRXT6W6ksX4JsClt_7OoO8knyqeLgSLQg
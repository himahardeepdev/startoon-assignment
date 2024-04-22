const express = require('express');
const UsersModels = require('../models/usersModels'); // Importing the Users model
const router = express.Router();

// Route to get all users
router.get('/', async (req, res) => {
    try {
        const data = await UsersModels.find(); // Retrieve all users
        res.json(data); // Send the users data as JSON response
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Route to get a user by email
router.get("/:email", async (req, res) => {
    try {
        const data = await UsersModels.findOne({ email: req.params.email }); // Retrieve user by email
        res.json(data); // Send the user data as JSON response
    } catch (error) {
        console.log(error);
    }
});

// Route to sign up a new user
router.post("/signup", async (req, res) => {
    try {
        const data = new UsersModels(req.body); // Create a new user instance
        const result = await data.save(); // Save the new user to the database
        res.json(result); // Send the saved user data as JSON response
    } catch (error) {
        console.error("Error:", error);
        // res.status(500).send("Internal Server Error");
    }
});

// Route to login a user
router.post("/login", async (req, res) => {
    try {
        const data = await UsersModels.find({ $and: [{ email: req.body.email }, { password: req.body.password }] }); // Find user by email and password
        res.json(data); // Send the user data as JSON response
    } catch (error) {
        console.log(error);
    }
});

// Route to update a user's information
router.put("/update", async (req, res) => {
    try {
        const data = await UsersModels.updateOne({ email: req.body.email }, { $set: req.body }); // Update user by email
        res.json(data); // Send the update result as JSON response
    } catch (error) {
        console.log(error);
    }
});



module.exports = router;

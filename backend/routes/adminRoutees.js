const express = require('express');
const AdminModel = require('../models/adminModels');
const router = express.Router();

router.get('/',async(req,res)=>{
  try {
    const data = await AdminModel.find();
    res.json(data);
  } catch (error) {
    console.log(error);
  }

});

router.post('/',async(req,res)=>{
   try {
    const data = new AdminModel(req.body);
    const result = await data.save();
    res.json(result);
   } catch (error) {
    console.log(error);
   }
});

// Route to login a user
router.post("/login", async (req, res) => {
    try {
        const data = await AdminModel.find({ $and: [{ email: req.body.email }, { password: req.body.password }] }); // Find user by email and password
        res.json(data); // Send the user data as JSON response
    } catch (error) {
        console.log(error);
    }
});

// Route to update a user's information
router.put("/update", async (req, res) => {
    try {
        const data = await AdminModel.updateOne({ email: req.body.email }, { $set: req.body }); // Update user by email
        res.json(data); // Send the update result as JSON response
    } catch (error) {
        console.log(error);
    }
});

// Route to get a user by email
router.get("/:email", async (req, res) => {
    try {
        const data = await AdminModel.findOne({ email: req.params.email }); // Retrieve user by email
        res.json(data); // Send the user data as JSON response
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;
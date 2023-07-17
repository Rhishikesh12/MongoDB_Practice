const router = require("express").Router();
const User = require("../models/User");
const express = require("express");
const app = express();

app.use(express.json());

router.post("/login", async (req, res) => {
	try {
		if (!req.body.fname || !req.body.lname || !req.body.phone) {
			return res.status(400).json({
				error: "Fields 'fname', 'lname', and 'phone' are required.",
			});
		}
		const userDetails = new User({
			fname: req.body.fname,
			lname: req.body.lname,
			phone: req.body.phone,
			residence: req.body.residence,
			age: req.body.age,
		});
		const response = await userDetails.save();
		res.status(200).json(response);
	} catch (err) {
		console.error("Error inserting user data:", err);
		res.status(500).json({ error: "Failed to insert user data" });
	}
});

router.get("/fetch", async (req, res) => {
	try {
		const getAllUsers = await User.find();
		res.status(200).json(getAllUsers);
	} catch (e) {
		res.status(404).json({ e: "User Not Found !!!" });
	}
});

module.exports = router;

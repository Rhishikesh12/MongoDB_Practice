const router = require("express").Router();
const User = require("../models/putData");
const express = require("express");
const app = express();

app.use(express.json());

router.post("/login", async (req, res) => {
	try {
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

module.exports = router;

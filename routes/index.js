const router = require("express").Router();
const User = require("../models/putData");

router.post("/login", async (req, res) => {
	try {
		const userDetails = await User.create({
			fname: req.body.fname,
			lname: req.body.lname,
			phone: req.body.phone,
			residence: req.body.residence,
			age: req.body.age,
		});

		res.status(200).json(userDetails);
	} catch (err) {
		console.error("Error inserting user data:", err);
		res.status(500).json({ error: "Failed to insert user data" });
	}
});

module.exports = router;

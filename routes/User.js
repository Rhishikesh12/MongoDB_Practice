const router = require("express").Router();
const User = require("../models/User");

// * To create a new user

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

// * To display the users

router.get("/fetch", async (req, res) => {
	try {
		const getAllUsers = await User.find();
		res.status(200).json(getAllUsers);
	} catch (e) {
		res.status(404).json({ e: "User Not Found !!!" });
	}
});

// * To delete the User Data

router.delete("/user/:id", async (req, res) => {
	try {
		const delUser = await User.findByIdAndDelete(req.params.id);

		if (!delUser) {
			// If the user with the provided ID doesn't exist
			return res.status(404).json({ message: "User not found" });
		}
		res.status(200).json({ Message: "User has been Deleted ", delUser });
	} catch (e) {
		res.status(500).json(e);
	}
});

module.exports = router;

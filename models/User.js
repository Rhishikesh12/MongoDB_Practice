const mongoose = require("mongoose");

const userDetails = mongoose.Schema({
	fname: {
		type: String,
		required: true,
	},
	lname: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	residence: {
		type: String,
	},
	age: {
		type: Number, // Change the type to Number
	},
});

module.exports = mongoose.model("User", userDetails);

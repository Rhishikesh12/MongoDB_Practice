const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const putRouter = require("./routes/index");
const mongoose = require("mongoose");

mongoose
	.connect(process.env.MONGODB_KEY)
	.then(() => console.log("Database is Connected Successfully"))
	.catch((err) => {
		console.log(err);
	});

app.use(putRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
	console.log(`Server is hosted on Port ${PORT}`);
});

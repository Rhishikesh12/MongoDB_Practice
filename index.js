const express = require("express");
const app = express();
const dotenv = require("dotenv");
const putRouter = require("./routes/User");
const mongoose = require("mongoose");

// Load environment variables from .env file
dotenv.config();

// Middleware
app.use(express.json());

// Connect to the MongoDB database
mongoose
	.connect(process.env.MONGODB_KEY, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Database is Connected Successfully"))
	.catch((err) => {
		console.error("Error connecting to the database:", err);
	});

// Mount the router
app.use(putRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is hosted on Port ${PORT}`);
});

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js"; // Ensure the path to your book route is correct
import userRoute from"./route/user.route.js";
// Load environment variables

const app = express();
dotenv.config();



// Middleware
app.use(cors()); // Allow Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON payloads

// Environment variables
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MongoDBURI;

// MongoDB connection
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Define routes
app.use("/book", bookRoute);
app.use("/user",userRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

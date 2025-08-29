import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

// Signup Functionality
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create and save the new user
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashedPassword,
    });
    await createdUser.save();

    return res.status(201).json({
      message: "User created successfully",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.error("Error: " + error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Login Functionality
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Compare the password
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Respond with success
    return res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error: " + error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "all fields are required to fill" });
  }
  // hashing the password
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
     res.json("sign up successfully")
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

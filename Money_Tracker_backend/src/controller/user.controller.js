import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

const registerUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    if (!username || !password || !email){
        return res.status(400).json({message: "All fields are required"})
    }
    const saltedPassword = await bcrypt.hash(password, 10)

    const creating = await User.create({
      username: username,
      password: saltedPassword,
      email: email.toLowerCase(),
    });
    if (creating) {
      return res.status(200).json({ message: "User created!" });
    }
    res.status(400).json({ message: "Oops! Something went wrong" });
  } catch (error) {
    res.status(500).json({ message: `GET Error: ${error}` });
  }
};

const loginUser = async (req, res) => {
  try {
    const { usernamemail, password } = req.body;

    if (!usernamemail || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const findByName = await User.findOne({ username: usernamemail});
    const findByEmail = await User.findOne({ email: usernamemail});

    let result;

    if(findByEmail){
      result = findByEmail
    } if(findByName){
      result = findByName
    }

    let isMatching
    
    if(result){
      isMatching = await bcrypt.compare(password, result.password)
    }

    const token = jwt.sign(
      {_id: result._id},
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    )

    if (findByName && isMatching){
        return (
            res.status(200).json({ message: "Logged in Successfully (U)", token  })
        )
    }
    if (findByEmail && isMatching){
        return (
            res.status(200).json({ message: "Logged in Successfully (E)", token })
        )
    }
    res.status(400).json({ message: "No user found", login: false })

} catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
};

const jwtLogin = async(req, res ) => {

  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token" });
    const token = authHeader.startsWith("Bearer ")
  ? authHeader.split(" ")[1]
  : authHeader;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const findUser = await User.findOne({_id: decoded._id})

    if(findUser){
    res.status(200).json({ message:"Loged in" })}

    if(!findUser){
      res.status(400).json({ message:"User not found", decoded })
    }

  } catch (error) {
    return res.status(500).json({ message: `Middleware error: ${error}` });
  }
};

export { registerUser, loginUser, jwtLogin };

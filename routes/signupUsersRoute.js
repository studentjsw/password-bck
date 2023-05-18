import express from "express";
import { User, generateAuthToken } from "../models/user.js";
import bcrypt from "bcrypt"


const router = express.Router(); 

router.post("/", async(req, res)=>{
    try {
        
    let Users= await User.findOne({email : req.body.email})
    if(Users) return res.status(409).json({message:"Email already exist"})

   // generate password

   const salt = await bcrypt.genSalt(10); 
   const hasedPassword = await bcrypt.hash(req.body.password, salt); 

   // new password updation 
   Users = await new User({
        name : req.body.name,
        email : req.body.email,
        password : hasedPassword
    }).save(); 
    
    const token =  generateAuthToken(Users._id); 
    res.status(201).json({message : "Successfully signed up", token})
} catch (error) {
    console.log(error)
       res.status(500).json({message : "Internal server error"}) 
}

})


export const signupRouter = router;

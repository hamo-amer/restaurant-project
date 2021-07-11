const User=require('../models/User')
const bcrypt=require('bcryptjs')
const jsw=require('jsonwebtoken')
const {jwtSecret,jwtExpire}=require('../config/keys.js')

exports.signupController=async(req,res)=>{
    const {username,email,password}=req.body
try{
   const user=await User.findOne({email})
   if(user){
       return res.status(400).json({errorMessage:"email already exists"})
   }
   const newUser=new User();
   newUser.username=username
   newUser.email=email
   const salt=await bcrypt.genSalt(10)
   newUser.password=await bcrypt.hash(password,salt)

   await newUser.save()
   res.status(200).json({successMessage:"user added please signin"})

} catch(err){
console.log("server error",err)
res.status(500).json({errorMessage:"server error"})
}  
}
exports.signinController=async(req,res)=>{
    const {email,password}=req.body
    const user= await User.findOne({email})

    if(!user){
       return res.status(400).json({errorMessage:"Bad Credentials"})
    }
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(400).json({errorMessage:"Bad Credentials"})
    }
    const payload={
        _id:user._id
    }
    const token=await jsw.sign(payload,jwtSecret,{expiresIn:jwtExpire}) 
    const {_id,username,role}=user
    res.status(200).json({token,user:{_id,username,email,role}})
}
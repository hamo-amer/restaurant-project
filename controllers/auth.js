const User=require('../models/User')
const bcrypt=require('bcryptjs')

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
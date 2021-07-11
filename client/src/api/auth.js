import axios from "axios"


export const signup=async(data)=>{
    const config={
        headers:{
            "Content-Text":"application/json",
            token:"hello from token"
        }
    }
    const response=await axios.post("/api/auth/signup",data,config)
    return response
}
export const signin=async(data)=>{
    const config={
        headers:{
            "Content-Text":"application/json",
            token:"hello from token"
        }
    }
    const response=await axios.post("/api/auth/signin",data,config)
    return response
}
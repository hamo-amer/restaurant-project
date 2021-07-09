import React,{useState,Fragment} from 'react'
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';
import {Form,InputGroup,FormControl,Button} from 'react-bootstrap'
import {Link} from "react-router-dom"
import {ErrorMessage,SuccessMessage} from "../helpers/message"
import {ShowLoading} from "../helpers/loading"
import {signup} from '../api/auth'

function Signup() {
  const [formData,setFormData]=useState({
    username:'',
    email:'',
    password:'',
    password2:'',
    successMsg:'',
    errorMsg:'',
    loading:false
  })
const {username,email,password,password2,successMsg,errorMsg,loading}=formData

// handle change
const handlechange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value,errorMsg:"",successMsg:""})
}

const handleSubmit=e=>{
e.preventDefault()
if(isEmpty(username)||isEmpty(email)||isEmpty(password)||isEmpty(password2)){
  setFormData({...formData,errorMsg:"All fields are required"})
}else if(!isEmail(email)){
  setFormData({...formData,errorMsg:"invalid Email"})
} else if(!equals(password,password2)){
  setFormData({...formData,errorMsg:"Passwords do not match"})
} else{
// Success
const {username,email,password}=formData
const data={username,email,password}
setFormData({...formData,loading:true})
signup(data).then(response=>{
  console.log(response.data)
  setFormData({username:"",
              email:"",
              password:"",
              password2:"",
              successMsg:response.data.successMessage,
              errorMsg:"",
              loading:false
})
})
            .catch(err=>{
              console.log("Axios signup error: ",err.response.data)
              setFormData({...formData,loading:false,errorMsg:err.response.data.errorMessage})
            })
}
}


    return (
      <Fragment>
      {successMsg && SuccessMessage(successMsg)}
      {errorMsg && ErrorMessage(errorMsg)}
      {loading && <div style={{textAlign:"center",marginBottom:"20px"}} >{ShowLoading()}</div>}
        <Form style={{width:"40%",marginTop:"100px !important",margin:"auto"}} onSubmit={handleSubmit} noValidate >
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1"><i className="fa fa-user"></i></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
    name='username'
    value={username}
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
      type="text"
      onChange={handlechange}
    />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1"><i className="fa fa-envelope"></i></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
    name="email"
    value={email}
      placeholder="User Email"
      aria-label="User Email"
      aria-describedby="basic-addon1"
      type="email"
      onChange={handlechange}
    />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1"><i className="fa fa-lock"></i></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
     name="password"
     value={password}
      placeholder="password"
      aria-label="Password"
      aria-describedby="basic-addon1"
      type="password"
      onChange={handlechange}
    />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1"><i className="fa fa-lock"></i></InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
    name='password2'
    value={password2}
      placeholder="confirm password"
      aria-label="Confirm Password"
      aria-describedby="basic-addon1"
      type="password"
      onChange={handlechange}

    />
  </InputGroup>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <p>
      Have an account ? <Link to='/signin'>Sign in</Link>
  </p>
        </Form>
        
        {/* <p>{JSON.stringify(formData)}</p> */}
        </Fragment>
    )
}

export default Signup

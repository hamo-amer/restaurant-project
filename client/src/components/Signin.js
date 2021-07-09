import React,{useState,Fragment} from 'react'
import {Form,InputGroup,FormControl,Button} from 'react-bootstrap'
import {Link} from "react-router-dom"
import {ErrorMessage} from "../helpers/message"
import {ShowLoading} from "../helpers/loading"


function Signin() {
    const [formData,setFormData]=useState({
        email:'',
        password:'',
        redirectDashbord:false,      
        errorMsg:'',
        loading:false
      })
      const {email,password,redirectDashbord,errorMsg,loading}=formData
      const handlechange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value,errorMsg:""})
      }
      const handleSubmit=e=>{
        e.preventDefault()
      }
    return (
        <Fragment>
       
        {errorMsg && ErrorMessage(errorMsg)}
        {loading && <div style={{textAlign:"center",marginBottom:"20px"}} >{ShowLoading()}</div>}
          <Form style={{width:"40%",marginTop:"100px !important",margin:"auto"}} onSubmit={handleSubmit} noValidate >
  
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
 
    <Button variant="primary" type="submit">
      Submit
    </Button>
    <p>
        Don't have an account ? <Link to='/signup'>Sign up</Link>
    </p>
          </Form>
          
          <p>{JSON.stringify(formData)}</p>
          </Fragment>
    )
}

export default Signin

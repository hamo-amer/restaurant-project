import React from 'react'
import {Alert} from "react-bootstrap"

export const  ErrorMessage=(msg)=> {
    return (
        <Alert  variant="danger">
    {msg}
  </Alert>
    )
}
export const  SuccessMessage=(msg)=> {
  return (
      <Alert  variant="success">
  {msg}
</Alert>
  )
}


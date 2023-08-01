import React from 'react'

const  SignUpForm = () => {
  return (
    <div>
        <form>
            <h1>Sign up with your email and password</h1>
            <label>Display Name</label>
            <input type="text" required/>
            <label>Email</label>
            <input type="email" required/>
            <label>Password</label>
            <input type="password" required/>
            <label>Confirm Password</label>
            <input type="password" required/>
        </form>
    </div>
  )
}

export default SignUpForm
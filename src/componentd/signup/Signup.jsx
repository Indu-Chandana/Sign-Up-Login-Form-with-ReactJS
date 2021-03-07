import React, { Component } from 'react'
import './signupStyles.css'
export default class Signup extends Component {

  constructor(props){
    super(props);
    this.state = {
      email : '',
      password: '',
      first_name: '',
      last_name: ''
    }
  }
  
  onSubmitHandler = () => {
    alert(JSON.stringify(this.state))
  }

  onChangeHandler = (e) => {

    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }
    render() {
        return ( 
            <div className="signup-parent">
                <div className="signup-name">
                    <h1 className="title-signup"> SIGNUP </h1>
                </div>
                <div className="signup-form">
                    <form method="post" onSubmit={this.onSubmitHandler}>
                        <h2>SIGNUP for HAPPY time.</h2>
                        <p className="hint-text">Create your account. It's free and only takes a minute.</p>
                        <div className="form-group">
                        <div className="row">
                          <div className="col"><input onChange={this.onChangeHandler} type="text" className="form-control" name="first_name" placeholder="First Name" required="required" value={this.state.first_name}/></div>
                          <div className="col"><input onChange={this.onChangeHandler} type="text" className="form-control" name="last_name" placeholder="Last Name" required="required" value={this.state.last_name} /></div>
                        </div>        	
                        </div>
                        <div className="form-group">
                          <input type="email" onChange={this.onChangeHandler} className="form-control" name="email" placeholder="Email" required="required" value={this.state.email}/>
                        </div>
                        <div className="form-group">
                          <input type="password" onChange={this.onChangeHandler} className="form-control" name="password" placeholder="Password" required="required" value={this.state.password}/>
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
                        </div>        
                        <div className="form-group">
                          <label className="form-check-label"><input type="checkbox" required="required" /> I accept the <a href="https://www.google.com/">Terms of Use</a> &amp; <a href="https://translate.google.com/">Privacy Policy</a></label>
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

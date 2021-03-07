import React, { Component } from 'react';
import './loginStyles.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : ''
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
            <div className="login-parent">
                <div className="login-name">
                    <h1 className="title-login">LOGIN</h1>
                </div>
                <div className="login-form">
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input name="email" onChange={this.onChangeHandler} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="email" value={this.state.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input  name="password" onChange={this.onChangeHandler} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password}/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    {/* <button type="submit" className="submit-button">Submit</button> */}
                    <button type="submit" class="btn btn-outline-primary">Submit</button>
                </form>
                </div>
            </div>
        );
    }
}
export default Login;

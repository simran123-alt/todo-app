import React,{Component} from "react";
import AuthenticationService from "./AuthenticationService";
class LoginComponent extends Component{
    constructor(props) {
        super(props);

        this.state={
            username:'in38minutes',
            password:'',
            showSuccessMessage:false,
            hasLoginFailed:false
        }
        // this.handleUsernameChange=this.handleUsernameChange.bind(this)
        // this.handlePasswordChange=this.handlePasswordChange.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.loginClicked=this.loginClicked.bind(this)
    }

    // handleUsernameChange(event){
    //     console.log(event.target.value);
    //     this.setState({username:event.target.value})
    // }
    // handlePasswordChange(event){
    //     console.log(event.target.value);
    //     this.setState({password:event.target.value})
    // }

    handleChange(event){
        //console.log(event.target.value);
        console.log(this.state);
        this.setState(
            {
            [event.target.name]:
                    event.target.value

        }
        )
    }

    loginClicked(){
        //in28minutes,dummy
        if(this.state.username==='in28minutes' && this.state.password==='dummy') {
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            console.log('Successful')
            this.setState({showSuccessMessage:true})
            this.setState({hasLoginFailed:false})
        }
        else
        {
            console.log('Failed')
            this.setState({hasLoginFailed:true})
            this.setState({showSuccessMessage:false})

        }

    }



    render() {
        return(
            <div>
                {/* User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                */}
                {/*
                <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                <h1>Login</h1>
                <div className="container">
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {/*
                <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }

}

function ShowInvalidCredentials(props){
    if(props.hasLoginFailed){
        return <div>Invalid Credentials</div>
    }
    else
        return null
}

function ShowLoginSuccessMessage(props){
    if(props.showSuccessMessage){
        return <div>Login Successful</div>
    }
    else
        return null
}


export default LoginComponent
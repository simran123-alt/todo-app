import React,{Component} from "react";
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import HelloWorldService from "../service/HelloWorldService";

class WelcomeComponent extends  Component {
    constructor(props) {
        super(props);
        this.retrieveWelcomeMessage=this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse=this.handleSuccessfulResponse.bind(this)
        this.state={
            welcomeMessage:''
        }
    }
    render(props) {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>
                    {/*<a href="/todos">here</a>*/}
                </div>
                <div className="container">
                    Click here to get a customized welcome message.
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                </div>
            </>

        )
    }
    retrieveWelcomeMessage(){
        //console.log('retrieve clicked')
        HelloWorldService.executeHelloWorldService()
            .then(response =>console.log(response))
        // HelloWorldService.executeHelloWorldService()
        //     .then(response =>this.handleSuccessfulResponse(response))
            //.catch()
    }

    handleSuccessfulResponse(response){
        this.setState({welcomeMessage:response.data})
    }
}

export default WelcomeComponent
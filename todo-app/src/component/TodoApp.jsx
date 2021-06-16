import React,{Component} from "react";
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent"
import ListTodosComponent from "./ListTodosComponent"
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
import AuthenticatedRoute from "./AuthenticatedRoute"
import TodoComponent from "./TodoComponent";



class TodoApp extends Component{
    render() {
        return(
            <div className="TodoApp">
                <HeaderComponent/>
                <Router>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" exact component={LoginComponent}/>
                        <AuthenticatedRoute path="/logout" exact component={LogoutComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" exact component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
                        <AuthenticatedRoute path="/todos" exact component={ListTodosComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                </Router>
                <FooterComponent/>
                {/*
                <LoginComponent/>
                <WelcomeComponent/>
                */}
            </div>
        )
    }
}

function ErrorComponent(){
    return <div>An Error Occured. U typed wrong link ...</div>
}
export default TodoApp
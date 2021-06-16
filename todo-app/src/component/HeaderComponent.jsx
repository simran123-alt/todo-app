import React,{Component} from "react";
import { Route, Switch, Link, BrowserRouter} from 'react-router-dom';
import AuthenticationService from "./AuthenticationService";
import LogoutComponent from "./LogoutComponent";



class HeaderComponent extends Component{
    render() {
        const isUserLoggedIn=AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);
        return(

            <div>
                Header<hr/>
                {isUserLoggedIn && <a href="/welcome/in28minutes" >Home</a>}
                {isUserLoggedIn && <a href="/todos" >Todos</a>}
                {!isUserLoggedIn && <a href="/login" >Login</a>}
                {isUserLoggedIn && <a href="/logout" onClick={AuthenticationService.logout}>Logout</a>}

                {/*<header>*/}
                {/*    <nav className="navbar navbar-expand-md navbar-dark bg-dark">*/}
                {/*        <div><a href="http://www.in28minutes.com" className="navbar-brand">in28minutes</a></div>*/}
                {/*        <ul className="navbar-nav">*/}
                {/*{isUserLoggedIn && <li ><Link className="nav-link" to="/welcome/in28minutes" >Home</Link></li>}*/}
                {/*{isUserLoggedIn && <li ><Link className="nav-link" to="/todos" >Todos</Link></li>}*/}
                {/*        </ul>*/}
                {/*        <ul className="navbar-nav navbar-collapse justify-content-end">*/}
                {/*{!isUserLoggedIn && <li ><Link className="nav-link" to="/login" >Login</Link></li>}*/}
                {/*{isUserLoggedIn && <li ><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}*/}
                {/*        </ul>*/}
                {/*    </nav>*/}
                {/*</header>*/}

            </div>

        )
    }
}
export default HeaderComponent
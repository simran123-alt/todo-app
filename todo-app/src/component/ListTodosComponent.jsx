import React,{Component} from "react";
import TodoDataService from "../service/TodoDataService";
import AuthenticationService from "./AuthenticationService";
import moment from "moment";
class ListTodosComponent extends Component{
    constructor(props) {
        super(props)
        this.state={
           todos:[
               // {id:1, description:'Learn React',done:false,targetDate:new Date()},
               // {id:2, description: 'Learn to code',done:false,targetDate:new Date()},
               // {id:3, description: 'Visit London',done:false,targetDate:new Date()}
               ],
            message:null

        }
        this.updateTodoClicked=this.updateTodoClicked.bind(this)
        this.deleteTodoClicked=this.deleteTodoClicked.bind(this)
        this.addTodoClicked=this.addTodoClicked.bind(this)
        this.refreshTodos=this.refreshTodos.bind(this)

    }
    componentDidMount() {
        // let username=AuthenticationService.getLoggedInUserName();
        // TodoDataService.retrieveAllTodos(username)
        //     .then(
        //         response =>{
        //             //console.log(response)
        //             this.setState({todos:response.data})
        //         }
        //     )
        this.refreshTodos()
    }

    refreshTodos(){
        let username=AuthenticationService.getLoggedInUserName();
        TodoDataService.retrieveAllTodos(username)
            .then(
                response =>{
                    //console.log(response)
                    this.setState({todos:response.data})
                }
            )
    }

    deleteTodoClicked(id){
        let username=AuthenticationService.getLoggedInUserName();
        //console.log(id+" "+username);
        TodoDataService.deleteTodo(username,id)
            .then(
                response =>{
                    this.setState({message:`Delete of todo ${id}`})
                    this.refreshTodos()
                }
            )
    }
    updateTodoClicked(id){
        console.log('update'+id)
        this.props.history.push(`/todos/${id}`)
        // let username=AuthenticationService.getLoggedInUserName();
        // //console.log(id+" "+username);
        // TodoDataService.deleteTodo(username,id)
        //     .then(
        //         response =>{
        //             this.setState({message:`Delete of todo ${id}`})
        //             this.refreshTodos()
        //         }
        //     )
    }
    addTodoClicked(){
        console.log('update')
        this.props.history.push(`/todos/-1`)
        // let username=AuthenticationService.getLoggedInUserName();
        // //console.log(id+" "+username);
        // TodoDataService.deleteTodo(username,id)
        //     .then(
        //         response =>{
        //             this.setState({message:`Delete of todo ${id}`})
        //             this.refreshTodos()
        //         }
        //     )
    }

    render() {
        return(
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>description</th>
                        <th>IsCompoleted?</th>
                        <th>Target Date</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.todos.map(
                            todo=>
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                    <td><button className="btn btn-success" onClick={() =>this.updateTodoClicked(todo.id)} >Update</button></td>
                                    <td><button className="btn btn-warning" onClick={() =>this.deleteTodoClicked(todo.id)} >Delete</button></td>
                                </tr>
                        )
                    }
                    {/*
                    <tr>
                        <td>{this.state.todos.id}</td>
                        <td>{this.state.todos.description}</td>
                    </tr>
                    */}
                    </tbody>
                </table>
                    <div className="row"><button className="btn btn-success" onClick={this.addTodoClicked}>Add</button> </div>
                </div>
            </div>
        )
    }
}
export default ListTodosComponent
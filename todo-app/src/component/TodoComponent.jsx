import React,{Component} from "react";
import moment from "moment";
import {Form, Formik, Field, ErrorMessage} from "formik"
import TodoDataService from "../service/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class TodoComponent extends Component{

    constructor(props) {
        super(props);

        this.state={
            //id:1,
            id:this.props.match.params.id,
            description:'',
            targetDate:moment(new Date()).format('YYYY-MM-DD')
        }

        this.validate=this.validate.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }

    componentDidMount() {

        if(this.state.id===-1)
        {
            return
        }

        let username=AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveTodo(username,this.state.id)
            .then(//response => console.log(response)
                response =>this.setState({
                    description:response.data.description,
                    targetDate:moment(response.data.targetDate).format('YYYY-MM-DD')
                })
         )
    }

    validate(values){
        let errors={}
        // console.log(values)

        if(!values.description){
            errors.description='Enter a Description'
        }
        else if(values.description.length<5){
            errors.description='Enter atleast 5 Characters in Description'
        }

        if(!moment(values.targetDate).isValid()){
            errors.targetDate='Enter a valid Target Date'
        }

        return errors
    }
    onSubmit(values){
        //console.log(values)
        let username=AuthenticationService.getLoggedInUserName()

        if(this.state.id===-1){
            TodoDataService.createTodo(username,{
                id:this.state.id,
                description:values.description,
                targetDate:values.targetDate
            }).then(
                () =>this.props.history.push('/todos')
            )
            console.log(values)
        }
        else{
            TodoDataService.updateTodo(username,this.state.id,{
                id:this.state.id,
                description:values.description,
                targetDate:values.targetDate
            }).then(
                () =>this.props.history.push('/todos')
            )
            console.log(values)
        }

    }


    render() {

        // let description=this.state.description
        // let targetDate=this.state.targetDate
        let {description,targetDate}=this.state

        return (
        // <div>
        //     Todo Component for id - {this.props.match.params.id}
        // </div>
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik
                    initialValues={{
                        // description:description,
                        // targetDate: targetDate
                        description,targetDate
                    }}
                    onSubmit={this.onSubmit}
                    validate={this.validate}
                    validateOnChange={false}
                    validateOnBlur={false}
                    enableReinitialize={true}>
                        {
                            (props) =>(
                                // <div>Something</div>
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert=warning"/>
                                    <ErrorMessage name="targetDate" component="div" className="alert alert=warning"/>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"></Field>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"></Field>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>

                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}
export default TodoComponent
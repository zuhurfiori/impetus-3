
import React from "react";
import Popup from "reactjs-popup";
import "./createCase.css";
import { graphql } from 'react-apollo';


class CreateACase extends React.Component{
    
        
        constructor(props){
            super(props);
            this.state={
                caseId: "",
                dueDate: "",
                comment: "",
                task: ""
            }
        }
    
        submitForm(e){
                    e.preventDefault();
                    // console.log(this.state);
                    this.props.createCaseMutation({
                        variables: {
                            caseId: this.state.caseId,
                            dueDate: this.state.dueDate,
                            comment: this.state.comment,
                            task: this.state.task
                            
                        },
                        // refetchQueries:[{query: getPlayersQuery}]
                    });
                }
    
    
    render() {
        return (
    
            <Popup trigger={<button className="closeClaim" >Create A Case</button>} modal>
                {close => (
                    <div className="modal">
                        <a className="close" onClick={close}>
                            &times;
              </a>
                        <div className="header">
                            New Case ID1001
                        </div>
                        <form id="newCase"  onSubmit={this.submitForm.bind(this)}>
    
                            <div className="createCase">
                                <div className="toDo">
                                    <div className="comments">
                                        <h5>Comments</h5>
                                        <textarea rows="7" cols="30" name="comment" form="newCase" placeHolder="Enter Comments here..." onChange={(e) => this.setState({comment: e.target.value })}>
                                        </textarea>
                                    </div>
    
                                    <div className="date">
                                        <h5>Duedate:</h5>
                                        <input className="dueDate" type="date" name="dueDate" form="newCase"></input>
                                    </div>
    
                                </div>
                                <div className="tasks">
    
                                    <h5>Tasks</h5>
                                    <textarea rows="10" cols="30" name="Tasks" form="newCase" placeHolder="Enter Tasks here..." onChange={(e) => this.setState({task: e.target.value })}>
                                    </textarea>
                                </div>
    
    
                            </div>
    
    
                            <div className="actions">
                                <button className="button-green" form="newCase" >Create A Case </button>
    
                                <button className="button-red" onClick={() => { close(); }}>Cancel </button>
                            </div>
                        </form>
                    </div>
    
                )}
            </Popup>
        );
    }
    }
    export default CreateACase
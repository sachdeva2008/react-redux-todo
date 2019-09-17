import React from 'react';
import { connect } from 'react-redux';
import {dataList, addTask, removeTask, markDone} from '../actions/simpleAction';

import AddNew from './addNew';
import TaskList from './taskList';


class Dashboard extends React.Component{
    
    componentDidMount(){
        this.props.dispatch(dataList());
    }

    saveRecords = (data)=>{
		this.props.dispatch(addTask(data))
    }

    removeTask = (id) =>{
        this.props.dispatch(removeTask(id));
    }

    markDone = (id) => {
        this.props.dispatch(markDone(id));
    }
    
    render(){
        return (
            <React.Fragment>
                <AddNew addNewTask={this.saveRecords}></AddNew>
                <TaskList taskList={this.props.dataset} removeTask={this.removeTask} markDone={this.markDone}></TaskList>
            </React.Fragment>
        )
    }        
}

const mapStateToProps = (state) => {
    return {
        dataset : state.simpleReducer.dataset
    };
};

export default connect(mapStateToProps,null)(Dashboard);
import React, { Component } from 'react';
class TaskEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            task: [],
        }
        // bind
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getTasks();
    }

    //handle change
    handleChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    getTasks() {
        axios.get(`/tasks/${this.props.match.params.id}/edit`).then(response => {
            this.setState({
                task: response.data.task,
                name: response.data.task.name
            });
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.put(`/tasks/${this.props.match.params.id}`, {
            name: this.state.name
        }).then(response => {
            this.props.history.push('/');
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Edit Task</div>

                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <textarea
                                            onChange={this.handleChange}
                                            value={this.state.name}
                                            className="form-control"
                                            rows="5"
                                            maxLength="255"
                                            placegolder="Create new task" required />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Update Task
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskEdit;
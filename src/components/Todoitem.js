import React, { Component } from 'react'

export default class Todoitem extends Component {
	render() {
		return (
			<li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
				<h6 className="text-center text-capitalize">{this.props.item}</h6>
				<div className="todo-icon">
					<span className='text-success mx-2' onClick={this.props.handleEdit}><i className="fas fa-edit"></i></span>	
					<span className='text-danger' onClick={this.props.handleDelete}><i className="fas fa-trash"></i></span>	
				</div>
			</li>
		)
	}
}

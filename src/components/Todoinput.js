import React, { Component } from 'react'

export default class Todoinput extends Component {
	render() {
		return (
			<div className='card card-body  my-3'>
				<form onSubmit={this.props.handleSubmit} action="">
					<div className="input-group">
						<div className="input-group-prepend">
							<div className="input-group-text bg-primary text-white">
								<i className="fas fa-book"></i>
							</div>
						</div>
						<input type="text" value={this.props.item} onChange={this.props.handleChange} className='form-control text-capitalize' placeholder='add a todo item'/>
					</div>
					<button className=
					{this.props.editItem ? "btn btn-block btn-success my-3" : 'btn btn-block btn-primary my-3'}
					>{this.props.editItem ? "edit item" : 'add item'}</button>
				</form>
			
			</div>
		)
	}
}

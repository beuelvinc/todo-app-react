import React, { Component } from 'react'
import Todoitem from './Todoitem'
export default class Todolist extends Component {
	render() {
		return (
			<ul className='list-group my-5'>
				{
					this.props.items.map(item=>{
						return (
							<Todoitem 
							key={item.id} 
							item={item.item}
							handleDelete={()=>this.props.handleDelete(item.id)}
							handleEdit={()=>this.props.handleEdit(item.id)}
							/>
						)
					})
				}
				<h3 className='text-capitalize text-center my-3'>Todo list</h3>
				<button type="button" onClick={this.props.clearList} className='btn btn-block btn-danger text-capitalize'>clear list</button>
			</ul>
		)
	}
}

import React, { Component } from 'react'

import { Tasks } from '../api/tasks'

export default class Task extends Component {
  toggleChecked = () => {
    Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked)
  }

  deleteThisTask = () => {
    Meteor.call('tasks.remove', this.props.task._id)
  }

  render () {
    const taskClassName = this.props.task.checked ? 'checked' : ''

    return (
      <li className={taskClassName}>
        <button className='delete' onClick={this.deleteThisTask}>
            &times;
        </button>
          
        <input
          type='checkbox'
          readOnly
          checked={!!this.props.task.cheched}
          onClick={this.toggleChecked}
        />

        <span className='text'>
          <strong>{this.props.task.username}</strong>: {this.props.task.text}
        </span>
      </li>
    )
  }
}

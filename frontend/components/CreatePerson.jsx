import React from 'react';
import ReactDOM from 'react-dom';
import { ajax } from 'jquery';

const CreatePerson = React.createClass({
  getInitialState: function(){
    return {
      name: '',
      favoriteCity: ''
    }
  },
  handleChange: function(change, e){
    this.setState({
      [change]: e.target.value
    })
  },
  submit: function(e) {
    ajax({
      url: 'api/people',
      type: 'POST',
      data: this.state
    })
  },
  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input type="text" placeholder="What is your name" value={this.state.name} onChange={this.handleChange.bind(this, "name")}></input>
          <input type="text" placeholder="What is your favoriteCity" value={this.state.favoriteCity} onChange={this.handleChange.bind(this, "favoriteCity")}></input>
          <input className="submitButton" type="submit"></input>
        </form>
      </div>
    )
  }
})

export default CreatePerson;

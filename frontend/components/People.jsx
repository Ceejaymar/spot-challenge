import React from 'react';
import ReactDOM from 'react-dom';
import { ajax } from 'jquery';
import CreatePerson from './CreatePerson';

const People = React.createClass({
  getInitialState: function(){
    return {
      peopleList: []
    }
  },
  componentDidMount: function(){
    var that = this;
    ajax({
      url: 'api/people',
      type: 'GET'
    })
    .then(function(response){
      that.setState({
        peopleList: response
      })
    })
  },
  render() {
    return (
      <div>
        {
          this.state.peopleList.map((person, idx) => {
            return (
              <div key={idx}>
                <div>{person.name}</div>
                <div>
                  <div>{person.favoriteCity}</div>
                </div>
              </div>
            )
          })
        }
        <CreatePerson />
      </div>
    )
  }
})


export default People;

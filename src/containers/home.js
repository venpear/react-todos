import React, {Component} from 'react';
import {Link} from 'react-router';
class Home extends Component {
  render() {
    return (
      <div>
        <Link to='/todo'>TodoList</Link>
      </div>
    )
  }
}

export default Home;
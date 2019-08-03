import React from 'react';
// import { Container } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'
// import Avatar from 'react-avatar';
// import store from 'store'
// import isLoggedIn from '../helpers/is_logged_in';
// import axios from 'axios';


class AppFooter extends React.Component {
  
  render() {
    
  
    return (
      <div className='colorfooter'>
      <br/>
           
      <Link to='/'className="text-white"><img class="centeroke" height='40px' src='https://monggovest.herokuapp.com/static/img/Logo-White@2x.39103d4.png' alt=''/></Link>
    <br/>
     <p style={{ textAlign: 'center' , color: 'white'}}>  © 2019 Copyright - PT Monggovest Indonesia</p>
         
    
      </div>
    );
  }
}
export default withRouter (AppFooter)
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Container,
  DropdownItem } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'
import Avatar from 'react-avatar';
import store from 'store'
import isLoggedIn from '../helpers/is_logged_in';
import axios from 'axios';


class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
   items: {}
    };
    this.logOut = this.logOut.bind(this)

  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
      componentDidMount() {
        if (isLoggedIn()) {
            axios.get(`https://historic-acadia-33199.herokuapp.com/api/user/${localStorage.getItem('USER_ID')}`)
                .then(res => {
                    this.setState({
                       items: res.data.data
                    })
 
 
                }).catch(err => {
                    console.log(err)
                    alert(err)
                })
 
        }
 
    }


logOut() {
  store.remove('loggedIn');
  localStorage.removeItem('JWT_TOKEN')
  localStorage.removeItem('USER_ID')
  localStorage.removeItem('Roles')
  this.props.history.push('/login')
}
  render() {
    let loginicon
    let logInOut
    let roles
    let dataUser
    const {user_foto, username} = this.state.items

    if (isLoggedIn () & localStorage.getItem('Roles') === 'Peternak' )  {
      logInOut = <NavLink><Link onClick={this.logOut} style={{textDecoration:'none', color:'black'}} className='text-white'>Logout</Link></NavLink> 
      roles = <Link style={{textDecoration:'none', color:'black'}} to='/komoditas/pendaftaran'className="text-black"><DropdownItem>Pendaftaran Komoditas</DropdownItem></Link>
      loginicon = <DropdownToggle nav caret ><Avatar size="25" round={true} src={user_foto}>
                </Avatar> {username}</DropdownToggle>
       dataUser =  <Link style={{textDecoration:'none', color:'black'}} to='/komoditas/data'className="text-black"><DropdownItem>Komoditas Anda</DropdownItem></Link>       
     
  } else if (isLoggedIn () & localStorage.getItem('Roles') === 'Investor') {
    logInOut = <NavLink><Link  style={{textDecoration:'none', color:'black'}} onClick={this.logOut} className='text-white'>Logout</Link></NavLink> 
      
    
      loginicon = <DropdownToggle nav caret ><Avatar size="25" round={true} src={user_foto}>
                </Avatar> {username}</DropdownToggle>
      dataUser =  <Link style={{textDecoration:'none', color:'black'}}to='/investasi'className="text-black"><DropdownItem>Investasi Anda</DropdownItem></Link>
               
  } 
  
  else {logInOut = <NavLink  ><Link style={{textDecoration:'none', color:'black'}}className='text-white' to='/login' >Login</Link></NavLink>}
    return (
      <div className='colornav'>
        <Navbar light expand="md">
            <Container >
          <NavbarBrand ><Link style={{textDecoration:'none', color:'black'}} to='/'className="text-white"><img height='40px' src='https://monggovest.herokuapp.com/static/img/Logo-White@2x.39103d4.png' alt=''/></Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              
              <NavItem>
                <NavLink ><Link style={{textDecoration:'none', color:'black'}}className='text-white' to='/tentang' >Tentang Kami</Link></NavLink>
              </NavItem>
              <NavItem>
              <NavLink ><Link style={{textDecoration:'none', color:'black'}}className='text-white' to='/komoditas' >Komoditas</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink ><Link  style={{textDecoration:'none', color:'black'}}className='text-white' to='/stream' >Konsul Dong</Link></NavLink>
              </NavItem>
              
              <UncontrolledDropdown nav inNavbar>
                  {loginicon}
                <DropdownMenu right>
                  
                    {dataUser}
                  
                  
                    {roles}
                  
                  <DropdownItem divider />
                  
                  <Link style={{textDecoration:'none', color:'black'}} to='/pengaturan'className="text-black"><DropdownItem>Pengaturan Akun</DropdownItem></Link>
                </DropdownMenu>
              </UncontrolledDropdown>
      {logInOut}
            </Nav>
          </Collapse>
          </Container >
        </Navbar>
      </div>
    );
  }
}
export default withRouter (AppHeader)
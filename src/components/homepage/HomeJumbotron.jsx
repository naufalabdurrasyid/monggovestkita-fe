import React, { Component } from 'react';
import { Jumbotron, Container, Collapse, Button, CardBody, Card } from 'reactstrap';

class HomeJumbotron extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  render() {
  return (
    <div>
      <Jumbotron fluid className='colornav'>
        <Container fluid>
          <h1 style={{ width: '300px', margin: 'auto' , textAlign: 'center' , color: 'white'}}>Mau Investasi?</h1>
          <div style={{margin: 'auto' , textAlign: 'center'}}>
            <br/>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Ya!</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody style={{display: 'block' , position:'relative' , boxSizing:'border-box'}}>
            <img src='https://res.cloudinary.com/dcnhkq6qt/image/upload/v1563634043/oT4dxN_o5flzo.png' alt=''></img>
            </CardBody>
          </Card>
        </Collapse>
      </div>
        </Container>
        <br/>
      </Jumbotron>
    </div>
  );
  }
};

export default HomeJumbotron;
import React, { Component } from 'react';
import AppHeader from '../common/AppHeader';
import {
    Card, Button, CardImg,  Container, Row,
    CardBody,
} from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'
import AppFooter from '../common/AppFooter';

class KomoditasList extends Component {
    constructor(props) {
        super(props);
        this.state = {

            items: [


            ]

        };
    }
    componentDidMount() {
        axios.get('https://historic-acadia-33199.herokuapp.com/api/komoditas/data')
            .then(res => {
                this.setState({
                    items: res.data.result
                })
            });
    }
    render() {
        console.log('ini data', this.state.items)


        const cards = this.state.items.map((item) => {
            return (
                <div  class='col-md-4' >

                    
                    <Card >
                        <CardImg top width="100%"  height="200px" src={item.foto} alt="Card image cap" />

                        <CardBody>
                        <tr>

<th>Nama Ternak </th>
<tr ></tr>
<th>: {item.nama_ternak}</th>



</tr>
<tr>
<th>Asal</th>
<tr></tr>
<th>: {item.asal}</th>

</tr>
<tr>
<th >Harga/Lot</th>
<th></th>
<th>: Rp. {item.harga}</th>

</tr>
<tr>
<th >Lot Tersedia</th>
<th></th>
<th>: {item.lot_tersedia}</th>

</tr>


                        </CardBody>
                        <div style={{ margin: 'auto', textAlign: 'center' }}>
                        <Link style={{textDecoration:'none', color:'black'}} to={`/investasi/${item._id}`}><Button color="info">Invest</Button></Link>
                        </div>
<br/>
                    </Card>
                    <br/>
                    
                </div>
            );
        })
        return (
            <div>
                <AppHeader />

                <Container>
                <div className="body">
                    <h1 style={{ margin: 'auto', textAlign: 'center' }}>Komoditas Tersedia</h1>
                    <hr />
                    <Row>
                        {cards}
                    </Row>
                    </div>
                </Container>

                <AppFooter />

            </div >
        );
    }
}

export default KomoditasList;
import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class Payslip extends Component {
    render(){
      const {FirstName, LastName, AnnualIncome, GrossIncome, IncomeTax, NetIncome, SuperPay, Pay}=this.props;
      const myDate = new Date();
      const mon = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        return(
          <div className='payslip'  style={{width:'50%', margin:'auto', position:'relative'}}>
            <h1>Payslip</h1>
            <h2>{FirstName} {LastName}</h2>
            <ListGroup variant="flush">
              <ListGroup.Item variant='secondary'>{myDate.getDate()} {mon[myDate.getMonth()]} {myDate.getFullYear()}</ListGroup.Item>
              <ListGroup.Item>Monthly</ListGroup.Item>
              <ListGroup.Item variant='secondary'>Annual Income     ${(AnnualIncome).toLocaleString()}.00</ListGroup.Item>
              <ListGroup.Item>Gross Income     ${(GrossIncome).toLocaleString()}.00</ListGroup.Item>
              <ListGroup.Item variant='secondary'>Income Tax    ${(IncomeTax).toLocaleString()}.00</ListGroup.Item>
              <ListGroup.Item>Net Income    ${(NetIncome).toLocaleString()}.00</ListGroup.Item>
              <ListGroup.Item variant='secondary'>Super    ${(SuperPay).toLocaleString()}.00</ListGroup.Item>
              <ListGroup.Item>Pay    ${(Pay).toLocaleString()}.00</ListGroup.Item>
            </ListGroup>
            <Button 
                variant="primary" 
                style={{position:'absolute', right:'0', marginTop:'20px'}}
                >Pay</Button>
         </div>
        )
    }
}

const mapState=(state)=>({
    FirstName:state.getIn(['payslip', 'FirstName']),
    LastName:state.getIn(['payslip', 'LastName']),
    AnnualIncome:state.getIn(['payslip', 'AnnualIncome']),
    GrossIncome:state.getIn(['payslip', 'GrossIncome']),
    IncomeTax:state.getIn(['payslip', 'IncomeTax']),
    NetIncome:state.getIn(['payslip', 'NetIncome']),
    SuperPay:state.getIn(['payslip', 'SuperPay']),
    Pay:state.getIn(['payslip', 'Pay']),
})



export default connect(mapState, null)(Payslip);
import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import assert from 'assert';
import mongodb from 'mongodb'

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
              <ListGroup.Item variant='secondary'><b>Pay Date</b> <span style={{position:'absolute', left:'50%'}}>{myDate.getDate()} {mon[myDate.getMonth()]} {myDate.getFullYear()}</span></ListGroup.Item>
              <ListGroup.Item><b>Pay Frenquently</b> <span style={{position:'absolute', left:'50%'}}>Monthly</span></ListGroup.Item>
              <ListGroup.Item variant='secondary' ><b>Annual Income</b>     <span style={{position:'absolute', left:'50%'}}>${(AnnualIncome).toLocaleString()}.00</span></ListGroup.Item>
              <ListGroup.Item><b>Gross Income</b>     <span style={{position:'absolute', left:'50%'}}>${(GrossIncome).toLocaleString()}.00</span></ListGroup.Item>
              <ListGroup.Item variant='secondary'><b>Income Tax</b>    <span style={{position:'absolute', left:'50%'}}>${(IncomeTax).toLocaleString()}.00</span></ListGroup.Item>
              <ListGroup.Item><b>Net Income</b>    <span style={{position:'absolute', left:'50%'}}>${(NetIncome).toLocaleString()}.00</span></ListGroup.Item>
              <ListGroup.Item variant='secondary'><b>Super</b>    <span style={{position:'absolute', left:'50%'}}>${(SuperPay).toLocaleString()}.00</span></ListGroup.Item>
              <ListGroup.Item><b>Pay</b>    <span style={{position:'absolute', left:'50%'}}>${(Pay).toLocaleString()}.00</span></ListGroup.Item>
            </ListGroup>
            <Button 
                variant="primary" 
                style={{position:'absolute', right:'0', marginTop:'20px'}}
                onClick={handlePayClick.bind(this, FirstName, LastName, mon[myDate.getMonth()], AnnualIncome, GrossIncome, IncomeTax, NetIncome, SuperPay, Pay)}
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

function handlePayClick(FirstName, LastName, Month, AnnualIncome, GrossIncome, IncomeTax, NetIncome, SuperPay, Pay){
  const payslipInfo={
    FirstName:FirstName,
    LastName:LastName,
    Month: Month,
    AnnualIncome:AnnualIncome,
    GrossIncome:GrossIncome,
    IncomeTax:IncomeTax,
    NetIncome:NetIncome,
    SuperPay:SuperPay,
    Pay:Pay
  }
//  console.log(payslipInfo);
}


const mapDispatch=(dispatch)=>{
  return{
    
  }
}


export default connect(mapState, mapDispatch)(Payslip);
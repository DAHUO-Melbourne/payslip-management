import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, InputGroup, FormControl, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import * as actionCreators from './store/actionCreators';

class UserInfo extends Component {
    render(){
      const {FirstName, LastName, AnnualSalary, SuperRate}=this.props;
      return (
        <div className="App" style={{width:'50%', margin: 'auto', position:'relative'}}>
            <div style={{textAlign: 'center', paddingTop:'20px'}}>Employee Info</div>
            <Form style={{paddingTop: '20px'}}>
                <Form.Row style={{margin:'auto'}}>
                    <Col>
                        <Form.Control placeholder="First name" value={FirstName} onChange={this.props.handleFirstNameChange}/>
                    </Col>
                    <Col>
                        <Form.Control placeholder="Last name" value={LastName} onChange={this.props.handleLastNameChange}/>
                    </Col>
                    </Form.Row>
            </Form>

            <div style={{display:'flex', margin: 'auto', paddingTop:'20px'}}>
                <InputGroup className="mb-3" style={{flex: '2', marginRight: '10px'}}>
                <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="Annual Salary" 
                    aria-label="Amount (to the nearest dollar)" 
                    value={AnnualSalary} 
                    onChange={this.props.handleAnnualSalaryChange}/>
                <InputGroup.Append>
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup.Append>
                </InputGroup>

                <InputGroup className="mb-3" style={{flex: '2'}} >
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Super Rate"
                    aria-label="Super Rate"
                    aria-describedby="basic-addon1"
                    value={SuperRate}
                    onChange={this.props.handleSpuerRateChange}
                />
                </InputGroup>
            </div>
            <Link to={'/payslip'}>
                <Button 
                    variant="primary" 
                    style={{position:'absolute', right:'0'}}
                    onClick={this.props.handleClick.bind(this, FirstName, LastName, AnnualSalary, SuperRate)}>Generate Payslip</Button>
            </Link>
        </div>
      );
    }
}

const taxRate = [
    {
        min: 0,
        max: 18200,
        rate: 0,
        baseAmount: 0
    },
    {
        min: 18200,
        max: 37000,
        rate: 0.19,
        baseAmount: 0
    },
    {
        min: 37000,
        max: 90000,
        rate: 0.325,
        baseAmount: 3572
    },
    {
        min: 90000,
        max: 180000,
        rate: 0.37,
        baseAmount: 20797
    },
    {
        min: 180000,
        max: Infinity,
        rate: 0.45,
        baseAmount: 54097
    }
]

const mapState=(state)=>({
    FirstName:state.getIn(['userInfo','FirstName']),
    LastName:state.getIn(['userInfo','LastName']),
    AnnualSalary:state.getIn(['userInfo','AnnualSalary']),
    SuperRate:state.getIn(['userInfo','SuperRate']),
})

const mapDispatch=(dispatch)=>{
    return {
        handleFirstNameChange(e){
            const action={
                type: 'HANDLE_FIRST_NAME_CHANGE',
                value:e.target.value,
            }
            dispatch(actionCreators.handleFirstNameChange(e));
        },
        handleLastNameChange(e){
            const action={
                type: 'HANDLE_LAST_NAME_CHANGE',
                value:e.target.value,
            }
            dispatch(actionCreators.handleLastNameChange(e));
        },
        handleAnnualSalaryChange(e){
            const action={
                type: 'HANDLE_ANNUAL_SALARY_CHANGE',
                value:e.target.value,
            }
            dispatch(actionCreators.handleAnnualSalaryChange(e));
        },
        handleSpuerRateChange(e){
            const action={
                type: 'HANDLE_SUPER_RATE_CHANGE',
                value:e.target.value,
            }
            dispatch(actionCreators.handleSpuerRateChange(e));
        },
        handleClick(FirstName, LastName, AnnualSalary, SuperRate){
            const AnnualIncome=parseInt(AnnualSalary);
            const GrossIncome=Math.floor(AnnualIncome/12);
            let IncomeTax=0;

            let taxList = taxRate.map( item => {
                if(AnnualSalary > item.min && AnnualSalary <= item.max) {
                    IncomeTax = (AnnualIncome - item.min) * item.rate + item.baseAmount;
                }
            })

            const MonthIncomeTax=Math.ceil(IncomeTax/12);
            const NetIncome=GrossIncome-MonthIncomeTax;
            const SuperPay=Math.floor(GrossIncome*(SuperRate/100));
            const Pay=NetIncome-SuperPay;

            const action={
                type: 'GENERATE_PAYSLIP',
                FirstName: FirstName,
                LastName: LastName,
                AnnualIncome:AnnualIncome,
                GrossIncome:GrossIncome,
                IncomeTax:MonthIncomeTax,
                NetIncome:NetIncome,
                SuperPay:SuperPay,
                Pay:Pay
            }
//            alert(FirstName);
            dispatch(actionCreators.generatePayslip(FirstName, LastName, AnnualIncome, GrossIncome, MonthIncomeTax, NetIncome, SuperPay, Pay));
        }
    }
}

export default connect(mapState, mapDispatch)(UserInfo);


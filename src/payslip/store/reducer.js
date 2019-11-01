import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState=fromJS({
    FirstName:'',
    LastName:'',
    AnnualIncome:'',
    GrossIncome:'',
    IncomeTax:'',
    NetIncome:'',
    SuperPay:'',
    Pay:''
})

export default(state=defaultState, action)=>{
    switch(action.type){
        case 'GENERATE_PAYSLIP':
            return state.merge({
                'FirstName':action.FirstName,
                'LastName':action.LastName,
                'AnnualIncome':action.AnnualIncome,
                'GrossIncome':action.GrossIncome,
                'IncomeTax':action.IncomeTax,
                'NetIncome':action.NetIncome,
                'SuperPay':action.SuperPay,
                'Pay':action.Pay
            })
        default:
            return state;
    }
}
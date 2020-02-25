import * as constants from './constants';
import {fromJS} from 'immutable';

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
        case constants.GENERATE_PAYSLIP:
//            alert(action.FirstName);
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
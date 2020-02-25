import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState=fromJS({
    FirstName:'',
    LastName:'',
    AnnualSalary:'',
    SuperRate:''
})

export default(state=defaultState, action)=>{
    switch(action.type){
        case constants.HANDLE_FIRST_NAME_CHANGE:
            return state.set('FirstName', action.value);
        case constants.HANDLE_LAST_NAME_CHANGE:
            return state.set('LastName', action.value);
        case constants.HANDLE_ANNUAL_SALARY_CHANGE:
            return state.set('AnnualSalary', action.value);
        case constants.HANDLE_SUPER_RATE_CHANGE:
            return state.set('SuperRate', action.value);
        default:
            return state;
    }
}
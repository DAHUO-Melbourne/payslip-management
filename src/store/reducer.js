import { combineReducers } from 'redux-immutable';
import {reducer as userInfoReducer} from '../userInfo/store'
import {reducer as payslipReducer} from '../payslip/store';

export default combineReducers({
    userInfo: userInfoReducer,
    payslip: payslipReducer
})
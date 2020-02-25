import * as userInfoConstants from './constants';
import * as payslipConstants from '../../payslip/store/constants';

export const handleFirstNameChange = (e) => ({
    type: userInfoConstants.HANDLE_FIRST_NAME_CHANGE,
    value: e.target.value
})

export const handleLastNameChange = (e) =>({
    type: userInfoConstants.HANDLE_LAST_NAME_CHANGE,
    value: e.target.value
})

export const handleAnnualSalaryChange = (e) =>({
    type: userInfoConstants.HANDLE_ANNUAL_SALARY_CHANGE,
    value: e.target.value
})

export const handleSpuerRateChange = (e) => ({
    type: userInfoConstants.HANDLE_SUPER_RATE_CHANGE,
    value: e.target.value
})

export const generatePayslip = (FirstName, LastName, AnnualIncome, GrossIncome, IncomeTax, NetIncome, SuperPay, Pay) =>({
    type: payslipConstants.GENERATE_PAYSLIP,
    FirstName: FirstName,
    LastName: LastName,
    AnnualIncome: AnnualIncome,
    GrossIncome: GrossIncome,
    IncomeTax: IncomeTax,
    NetIncome: NetIncome,
    SuperPay: SuperPay,
    Pay: Pay
})
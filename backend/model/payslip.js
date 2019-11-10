const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const payslipSchema=new Schema({
    firstName:{type:String, required: true},
    lastName:{type:String, required:true},
    paymentMonth:{type:String, required:true},
    annualIncome:{type:Number, required:true},
    grossIncome:{type:Number, required: true},
    incomeTax:{type:Number, required:true},
    netIncome:{type:Number, required:true},
    superPay:{type:Number, required: true},
    pay:{type:Number, required: true}
},{
    timestamps: true,
})

const Payslip=mongoose.model('payslip', payslipSchema);

module.exports=Payslip;
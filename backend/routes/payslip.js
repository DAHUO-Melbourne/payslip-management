const router=require('express').Router();
let payslip=require('../model/payslip');

router.route('/').get((req, res)=>{
    payslip.find()
    .then(payslips=>res.json(payslips))
    .catch(err=>res.status(400).json('Error '+err));
});

router.route('/add').post((req,res)=>{
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const paymentMonth=req.body.paymentMonth;

    const annualIncome=req.body.annualIncome;
    const grossIncome=req.body.grossIncome;
    const incomeTax=req.body.incomeTax;

    const netIncome=req.body.netIncome;
    const superPay=req.body.superPay;
    const pay=req.body.pay;

    const newPayslip=new payslip({
        firstName,
        lastName,
        paymentMonth,
        annualIncome,
        grossIncome,
        incomeTax,
        netIncome,
        superPay,
        pay
    })

    newPayslip.save()
    .then(()=>res.json('Exercise added!'))
    .catch(err=>res.status(400).json('Error '+err));
});

router.route('/find').get((req, res)=>{
    payslip.find({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        paymentMonth:req.body.paymentMonth
    })
    .then(payslips=>res.json(payslips))
    .catch(err=>res.status(400).json('Error '+err));
});

module.exports=router;
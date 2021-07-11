const {check,validationResult}=require('express-validator')


exports.signupValidator=[
    check('username').not().isEmpty().trim().withMessage('all fields are require'),
    check('email').isEmail().normalizeEmail().withMessage('invalid email'),
    check('password') .isLength({ min: 6 })
    .withMessage('must be at least 6 chars long')
]
exports.signinValidator=[
    check('email').isEmail().normalizeEmail().withMessage('invalid email'),
    check('password') .isLength({ min: 6 })
    .withMessage('must be at least 6 chars long')
]
exports.validatorResult=(req,res,next)=>{
    const result=validationResult(req)
    if(!result.isEmpty()){
       return  res.status(400).json({errorMessage:result.array()[0].msg})
    }
    next()
}
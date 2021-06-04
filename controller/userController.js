const catchAsync = require('./../utils/catchAsync');
const user= require('./../model/userModel');
const history = require('./../model/HistoryModel');
const AppError= require('./../utils/AppError');


exports.getHistory = catchAsync(async (req,res)=>{
    const userhistory =await history.find();
    res.status(200).render('userPanel/buyHistory',{
        title: "User Purchase History",
        userhistory
    })
})

exports.getUser= catchAsync(async (req,res,next)=>{
    const userById = await user.findById('60b36ae80fd1f83a08cfe51e');
    if(!userById){
        return next(new AppError('no such user exists',404));
    }
    res.status(200).render('userPanel/user',{
        title: "User Profile",
        userById
    })
})

exports.changePassword= (req,res)=>{
    res.status(200).render('userpanel/passChange')
}
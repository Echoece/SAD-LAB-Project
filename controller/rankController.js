const catchAsync = require('./../utils/catchAsync');
const ranks = require('./../model/rankModel');


exports.getAllrank = catchAsync( async (req,res)=>{
    const allRank= await ranks.find().sort([['kills',-1]]);
    res.status(200).render('./Rank/Rank',{
        allRank
    })
});

const mongoose =require('mongoose');
const { userhistoryschema } = require('./userhistory');
const {userschema}=require('./userschema')
mongoose.connect('mongodb+srv://rahulgarg:expensetracker@cluster0.isrlz9a.mongodb.net/?retryWrites=true&w=majority')
.then(function(db){
  console.log("db is connected");
})
.catch(function(err){
  console.log(err.message);
})

const usermodel=mongoose.model('usermodel',userschema);
const userhistory=mongoose.model('userhistory',userhistoryschema);
module.exports={usermodel,userhistory}

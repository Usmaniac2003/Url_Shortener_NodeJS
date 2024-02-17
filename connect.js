const mongoose=require('mongoose');
//Function for connecting to MongoDB
async function Connect_to_Mongo_DB (url){
    await mongoose.connect(url).then(()=>{
        console.log("MongoDB connected");
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports={
    Connect_to_Mongo_DB,
}
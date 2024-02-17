const express=require('express');
const app=express();
const PORT=3000;
const localhost="mongodb://127.0.0.1:27017/";
const DB_NAME="URL_SHORTNER";
const URL=localhost+DB_NAME;
//DB connection
const {Connect_to_Mongo_DB}=require('./connect');
Connect_to_Mongo_DB(URL);
//Router Connections
const urlRouter=require('./routes/url');
app.use(express.json());
app.use('/url',urlRouter);

app.get("/",(req,res)=>{
    res.json("Welcome to URL shortener)");
})
//Listening to APP through PORT 3000.
app.listen(PORT,()=>{
console.log("Server Started at PORT: "+PORT);
});
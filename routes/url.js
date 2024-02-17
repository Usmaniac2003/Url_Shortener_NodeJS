const express=require('express');
const {GenerateShortId_OF_URL,Get_URL_BY_ID,Get_Analytics}=require('../controllers/url');
const router=express.Router();


//routes for url shortner
router.post('/',GenerateShortId_OF_URL);
router.get('/:shortID',Get_URL_BY_ID);
router.get('/analytics/:shortID',Get_Analytics);


module.exports=router;
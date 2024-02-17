const URL=require('../models/url');
//short-unique-id (This npm gives unique string id of desired length)
const ShortUniqueId = require('short-unique-id');
const uid=new ShortUniqueId({length:7});

//This Controller Function Generates a unique id for given url by the help of the above npm package.
async function GenerateShortId_OF_URL(req,res){
const body=req.body;
if (!body.url) {
    return res.status(400).json({error:"Url is Required"});
}
const ShortID=uid.rnd();

await URL.create({
    shortID:ShortID,
    redirectURL:body.url,
    visitHistory:[]


});

return res.json({ID:ShortID});

};
//This Controller takes the unique id as parameter of url and searches the URL in the database and redirects the user.
async function Get_URL_BY_ID(req, res) {
    try {
        const ID = req.params.shortID;
        const url = await URL.findOneAndUpdate({ shortID:ID }, {
            $push: {
                visitHistory: {
                    timestamps: Date.now()
                }
            }
        });
        if (!url) {
            return res.status(400).json({ msg: "Url with ID not Found" });
        }
        return res.redirect(url.redirectURL);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
//This Controller takes the unique id as parameter of url and searches the URL in the database and give its analytics(Total Clicks , TimeStamps)
async function Get_Analytics(req,res){
const ID=req.params.shortID;
const url=await URL.findOne({shortID:ID});
return res.json({
    totalClicks:url.visitHistory.length,
    analytics:url.visitHistory,
});
}

module.exports={GenerateShortId_OF_URL,Get_URL_BY_ID,Get_Analytics}

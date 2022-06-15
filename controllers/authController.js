const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){
    const token = req.header('authorizzation-token')
    if(!token) return res.status(401).send('Access Danied')

    try{
        const userVerified = jwt.verify(token,process.env.TOKEN_SECRET);
        req.user = userVerified
        next()
    }catch(error){
        res.status(401).send("Access Danied");

    }

}
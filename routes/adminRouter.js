const express = require('express');
const router = express.Router();

const auth = require('../controller/authController')

router.get('/', auth,  (req,res)=>{
     
    if(req.user.admin){
        res.send('Esse dado só deve ser visto pelo Admin')
    } else{
        res.status(401).send('Access Danied');
    }
}) 

router.all('/free',auth,(req,res)=>{
    res.send('Esse dado só deve ser visto por quem está logado')
})

module.exports = router;
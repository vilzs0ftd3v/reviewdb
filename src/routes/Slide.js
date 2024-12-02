const express = require('express');
const router = express.Router();

const RetrieveService = require('../services/Retrieve');

router.get('/retrieve',async (req,res) =>{
    const {id, name} = req.query;
    const arrFields = [];
    arrFields.push(id);
    arrFields.push(name);

    const results = await RetrieveService(arrFields);

    if(results){
        res
            .status(200)
            .send({
                status: results,
                message: "retrieved!"
            });
    }else{
        res
            .status(500)
            .send({
                status: results,
                message: "not retrieve!"
            });
    }

});

module.exports = router;
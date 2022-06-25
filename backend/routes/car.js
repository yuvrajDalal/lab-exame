const {query,response} = require("express")
const express = require("express");
const {request} = require("http")
const router = express.Router();
const utils = require("../utils");
const db = require("../db")


router.get('/all',(req,res)=>{
    const statement = `select * from car`

    db.Pool.query(statement,(err,data)=>{
        res.send(utils.createResult(err,data))
    })
})

router.post('/add',(req,res)=>{
    const{car_id, car_name, company_name, car_price} = req.body;
    const statement = `insert into car (car_id, car_name, company_name, car_price) values(?,?,?,?);`

    db.Pool.query(statement,[car_id, car_name, company_name, car_price],(err,data)=>{
        res.send(utils.createResult(err,data))
    })
})

router.put('/update/:car_id',(req,res)=>{
    const{car_id} = req.params;
    const{ car_name, company_name, car_price} = req.body;
    const statement = `update car SET car_name = ? , company_name = ? , car_price = ? where car_id = ?;`

    db.Pool.query(statement,[ car_name, company_name, car_price,car_id],(err,data)=>{
        res.send(utils.createResult(err,data))
    })
})

router.delete('/delete/:car_id',(req,res)=>{
    const{car_id} = req.params;
   
    const statement = `DELETE from car where car_id = ?;`

    db.Pool.query(statement,[ car_id],(err,data)=>{
        res.send(utils.createResult(err,data))
    })
})



module.exports = router;
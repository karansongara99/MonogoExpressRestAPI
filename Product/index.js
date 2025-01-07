const mongoose = require('mongoose');
const Faculty = require('./model/Product');
const express = require('express');
const bodyParser = require('body-parser');

const atlasUrl = "mongodb://localhost:27017/product";

mongoose.connect(atlasUrl).then(()=>{
    console.log("Connected to DB Server");

    const app = express();

    app.use(bodyParser.json())

    //getAll
    app.get("/product",async (req,res)=>{
        const data = await Faculty.find();
        res.send(data);
    });

    //getByID
    app.get("/product/:id",async (req,res)=>{
        const data = await Faculty.findOne({_id:req.params.id});
        res.send(data);
    });

    //delete
    app.delete("/product/:id", async (req,res)=>{
        const data = await Faculty.deleteOne({_id:req.params.id});
        res.send(data)
    });

    //insert (Create)
    app.post("/product", async (req,res)=>{
        const obj = new Faculty({
            createdAt: req.body.createdAt,
            LaptopName: req.body.LaptopName,
            LaptopImage: req.body.LaptopImage,
            LaptopPrice: req.body.LaptopPrice,
            LaptopCompany: req.body.LaptopCompany,
            LaptopRamSize: req.body.LaptopRamSize,
            LaptopSSDSize: req.body.LaptopSSDSize,
            id: req.body.id,
        });
        const data = await obj.save();
        res.send(data);

    });

    //update
    app.patch("/product/:id", async (req,res)=>{
        let lap = await Faculty.findOne({_id:req.params.id});
        lap.LaptopName = req.body.LaptopName;
        lap.LaptopImage = req.body.LaptopImage,
        lap.LaptopPrice = req.body.LaptopPrice,
        lap.LaptopCompany = req.body.LaptopCompany,
        lap.LaptopRamSize = req.body.LaptopRamSize,
        lap.LaptopSSDSize = req.body.LaptopSSDSize,
        lap.id = req.body.id

        const data = await lap.save();
        res.send(data);
    });

    app.listen(3500,()=>{
        console.log("Web server started 3500....");
    });

});
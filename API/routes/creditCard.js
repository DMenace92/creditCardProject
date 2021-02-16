const mongoose = require('mongoose');
const express = require('express');
const Card = require('../modules/creditCard');
const Router = new express.Router()

Router.post('/createcard', async (req,res,next)=>{
    const cardInfo = new Card({
        ...req.body,
        
    }) 
    console.log(cardInfo)

    try{
        await cardInfo.save()
        res.status(200).send(cardInfo)
    }catch(err){
        res.status(400).send(err)
    }
})

Router.get('/cards', async (req,res)=>{
    const allCard = req.body
    try{
        const getCard = Card.findAll({allCard})
        res.status(200).send(getCard)
    }catch(e){
        res.status(400).send(e)
    }
})
module.exports = Router;

//first need to add a post method theat creates a credit card
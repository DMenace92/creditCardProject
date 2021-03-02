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
//works no need to add auth middleWare jusing jsonwebtoken for reall project 
//right now all the cards that is added will be displaed need to follow back to add token handleing for spicific user card holder IMPORTANT FOR MAIN PROJECT

Router.get('/cards', async (req,res)=>{
    try{
        const cards = await Card.find()
        res.status(200).send(cards)
    }catch(e){
        res.status(400).send(e)
    }

})
// Router.delete('/card/:id', async (req,res)=>{
//     try{
//         const card = await Card.findByIdAndRemove(req.param.id)
//         res.status(200).send(card)
//     }catch(e){
//         res.status(400).send(err)
//     }
// })
Router.delete('/card/:id', async (req, res)=>{
    if(!card){
        res.status(400).send('there is no card')
    }else{
    Card.findByIdAndRemove({_id:req.params.id}).then(function(card){
        res.status(200).send(card)
    })
}


})
module.exports = Router;


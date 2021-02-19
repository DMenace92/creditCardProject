const mongoose = require('mongoose');

const creditSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name:{ 
        type: String,
        required:true
    },
    number:{ 
        type: Number,
        required:true
    },
    cvc:{
        type: Number,
        required:true
    },
    expiry:{
        type: Number,
        required:true
    },
    card_type:{
        type: String,
        
    },
    debit:{
        type: Boolean,
    },
    credit:{
        type:Boolean,
    }
})
const Card = mongoose.model('Card', creditSchema)
module.exports = Card;
const mongoose = require('mongoose');

const creditSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name:{ 
        type: String,
        required:true
    },
    account_number:{ 
        type: Number,
        required:true
    },
    cvc:{
        type: Number,
        required:true,
    },
    month_exp_date:{
        type: Number,
        required: true
    },
    day_exp_date:{ 
        type:Number,
        required:true
    },
    card_type:{
        type: String,
        required:true
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
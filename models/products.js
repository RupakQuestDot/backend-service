const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: {type: String, required: true, max: 100},
    description : {type: String, required: true},
    images : { type : String, required: true, max: 200},
    category : { type : String, required: true},
    broucher : { type : String, required: true}

});


module.exports = mongoose.model('Product', ProductSchema);
const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    email :{
        type:String,
        required:true
    },
    textarea:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('forms',PostSchema);
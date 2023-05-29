const mongoose = require('mongoose');

const demoSchema = mongoose.Schema(
    {
        password:{
            type:String,
            required: [true, 'Please Enter the Password']
        },
        result:{
            type:String,
            required: [true, 'Please Enter the Result']
        },
    },
    {
        timestamps:true
    }
);

module.exports = mongoose.model('Demo', demoSchema);
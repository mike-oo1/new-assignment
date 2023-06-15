const mongoose = require('mongoose');

const famSchema = new mongoose.Schema( {
    fathersName: {
        type: String,
        required: true
    },
    mothersName: {
        type: String,
        required: true
    },
    Children: {
        type: Array,
        required: true
    },
    ChildrenImage: {
        type: Array,
        required: true
    }
}, { timestamps: true } )

const famModel = mongoose.model( "FamilyProfile", famSchema );
module.exports = famModel; 




module.exports =famModel
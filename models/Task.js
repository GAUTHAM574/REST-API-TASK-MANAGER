const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name :
        {type:String,
        required:[true,'must provide a valid name'],
        trim:true,
        maxlength: [20,' name cannot be more than 20 characters ']
    },
    completed: 
        {type:Boolean,
        default:false
        //required:[true,'must provide a valid Completion status']
    }
})

module.exports = mongoose.model('Task', TaskSchema);

//Task schema makes our job easier as they provide a relation to the db
// we can perform CRUD operation easily using builting models

// we can set they type of the db 
// But problem is they only allow the db as we set 
// even if we provide extra keys they wont be added to the db


//we can also perform valodation the values easily
// by using required field to true and setting type
//and a pass on message in case of failure of validation 

//we can also set other properties like max and min lengths also trim property
const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    basics:{
        
        name: { type: String },
        entryno:{type:String},
        age: {type:String},
        dob: {type:String},
        email: { type: String},
        phone: { type: String},
        website: { type: String },
        
        location:{
            address:{type:String},
            postalcode: { type: String},
            country: { type: String},
            state: { type: String},
            city: { type: String}

        }
    },
    
    profiles:[
        {
            network: { type: String},
            username: { type: String},
            url: { type: String},
        }
    ],

    education:[
        {
            institution: { type: String},
            discipline: { type: String },
            type: { type: String },
            startdate: { type: String },
            enddate: { type: String },
            cgpa: { type:String },
            maxcgpa: { type: String },
            courses:[
                {
                    name:{type:String}
                }
            ]

        }
    ],
    password:{type:String}
    // name:{type:String},
    // age:{type:String}
})

module.exports = User = mongoose.model('user',userSchema)
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 12
const jwt = require('jsonwebtoken')
require('dotenv').config()

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    name: {
        type: String,
        required: true,
        maxlength: 30
    },
    lastname: {
        type: String,
        required: true,
        maxlength: 30
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    image: {
        type: Buffer
    },
    token:{
        type: String
    }
})

userSchema.pre('save', function(next) {
    var user = this

    if (user.isModified('password')) {
        bcrypt.genSalt(saltRounds, function(err, salt){
            if (err) return next(err)

            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) return next(err)
                user.password = hash
                next()
            })
        })
    } else {
        next()
    }
})

userSchema.methods.comparePassword = function(enteredPassword, cb) {

    //enteredPassword is req.body.password
    //user.password is result of 'this' of user.comparePassword
    var user = this

    bcrypt.compare(enteredPassword, user.password, function(err, didItMatch){
        if(err) return cb(err, null)
        cb(null, didItMatch)
    })
}

userSchema.methods.generatorYis = function(cb) {
    var user = this

    var token = jwt.sign(user._id.toHexString() , process.env.TOKEN)
    user.token = token

    user.save((err, user) => {
        if(err) return cb(err, null)
        cb(null, user)
    })
}

userSchema.statics.findByToken = function(token, cb) {
    var user = this

    jwt.verify(token, process.env.TOKEN, function(err, decoded){
        //token is from cookie
        //"decoded" is the original payload(user._id) without the privateKey(process.env.TOKEN)
        
        user.findOne({'_id': decoded, 'token':token}, function(err, user){ 
            if (err) return cb(err, null)
            cb(null, user)
        })
    })
}


const User = mongoose.model('User', userSchema)

module.exports = {User}
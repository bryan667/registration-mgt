const express = require ('express')
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const app = express ()

mongoose.Promise = global.Promise
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true})
mongoose.set('useCreateIndex', true)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())

const port = process.env.PORT || 3001

app.listen(port, ()=> {
    console.log(`server running on ${port}`)
})

//Models
const {User} = require('./schema-models/user')

//Middleware
const {auth} = require('./middleware/auth')


app.get('/api/user/get_users', (req,res) => {
    User.find({}, (err, users)=> {
        if (err) return res.status(400).send(err)
        res.status(200).json(users)
    })
})

app.get('/api/users/logout', auth, (req,res)=> {
    User.findOneAndUpdate(
        {_id: req.user.id},
        {token:''},
        (err, doc)=>{
        if (err) return res.json({success:false, err})
        return res.status(200).send({
            success: true
        })
    })
})

app.post('/api/user/register', (req,res) => {
    const user = new User(req.body)

    user.save((err, docs)=> {
        if (err) return res.json({success:false, err})
        
        res.status(200).json({
            success: true,
            userdata: docs
        })
    })
})

app.post('/api/users/login', (req, res)=> {

    User.findOne({'email': req.body.email}, (err, user)=> {
        if (!user) return res.json({loginSuccess: false, message: 'Login failed. Please verify your credentials'})

        user.comparePassword(req.body.password, (err, didItMatch)=> {
            if (!didItMatch) return res.json({loginSuccess: false, message: 'Login failed. Please verify your credentials'})
            
            user.generatorYis((err, user)=> {
                if(err) return res.status(400).json({success: false, err})
                res.cookie('C_monster', user.token).status(200).json({loginSuccess: true})
            })
        })
    })
})
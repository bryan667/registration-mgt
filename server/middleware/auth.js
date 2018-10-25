const { User } = require('../schema-models/user')

let auth = (req,res,next) => {
    let token = req.cookies.C_monster

    User.findByToken(token, (err, user)=> {
        if(err) throw err
        
        if (!user) return res.json({
            message: 'User is not logged in',
            isAuth: false,
            error: true
        })

        req.token = token
        req.user = user
        next()
    })
}

module.exports = { auth }
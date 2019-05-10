const express = require('express')
const router = express.Router()

const User = require('../../models/users')

router.get('/',function(req,res){
    User.find()
        .then(users => res.json(users))
})

router.post('/',function(req,res) {
   User.create(req.body.newuser,function(err,CreatedUser) {
       if(err) console.log(err)
       else res.json(CreatedUser)
   })
})

router.delete('/:id',function(req,res){
    User.findByIdAndDelete(req.params.id,function(err) {
        if(err) res.status(404).json({success:false})
        else res.json({success:true})
    })
})

module.exports = router
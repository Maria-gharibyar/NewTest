const playermodel=require('../model/player.model')

module.exports.createPlayer=(request,response)=>{
        playermodel.create(request.body)
       .then(newPlayer=>{
        response.json({player:newPlayer})
       })
       .catch(err=>response.status(400).json(err))
}
module.exports.getPlayer=(request,response)=>{
    playermodel.find({})
   .then(newPlayer=>{
    response.json(newPlayer)
   })
   .catch(err=>response.status(400).json(err))
}
module.exports.DeletePlayer=(req,res)=>{
    playermodel.deleteOne({_id: req.params.id})
    .then(deleteuser=>res.json(deleteuser))
    .catch(err=>res.json(err))
}
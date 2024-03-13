const playercontroller=require('../Controller/player.controller')
module.exports=app=>{
    app.post('/api/player',playercontroller.createPlayer)
    app.get('/api/player',playercontroller.getPlayer)
    app.delete('/api/player/:id',playercontroller.DeletePlayer)
}
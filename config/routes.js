const express = require('express')

module.exports = function(server){


    //API rotas
    const router = express.Router()
    router.get('/', function (req, res) {
        res.json({
            status: 'API Its Working',
            message: 'Welcome to RESTHub crafted with love!'
        });
    });
    server.use('/api',router)

    const ajudaService = require('../app/ajudaService')
    ajudaService.register(router,'/ajuda')

    const ajudoService = require('../app/ajudoService')
    ajudoService.register(router,'/ajudo')
}
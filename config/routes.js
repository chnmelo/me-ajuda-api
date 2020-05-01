const express = require('express')

module.exports = function(server){


    //API rotas
    const router = express.Router()
    router.get('/', function (req, res) {
        res.json({
            status: 'API Está no Ar',
            message: 'Bem-vindo ao MeAjuda-api criada com amor para ajudar quem estiver com dificuldades'
        });
    });
    server.use('/api',router)

    const ajudaService = require('../app/ajudaService')
    ajudaService.register(router,'/ajuda')

    const ajudoService = require('../app/ajudoService')
    ajudoService.register(router,'/ajudo')
}
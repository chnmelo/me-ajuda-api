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

    router.get('/ajuda/:id', function (req, res) {
        ajudaService.finByID(req.params.id)
            .then( subscriber => {
                res.locals.subscriber = subscriber;
                next();
            } )
            .catch( error => {
                console.log( `Error fetching subscriber by ID: ${error.message}` );
                next( error );
            } );
    });
    router.get('/ajuda/cidade/:cidade', function (req, res) {
        ajudaService.find({ cidade: req.params.cidade}, function(err, data){
            res.json(data);
        })
    });
    router.get('/ajuda/estado/:estado', function (req, res) {
        ajudaService.find({ estado: req.params.estado}, function(err, data){
            res.json(data);
        })
    });

    const ajudoService = require('../app/ajudoService')
    ajudoService.register(router,'/ajudo')
}
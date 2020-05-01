const ajudo = require('./ajudo')

ajudo.methods(['get','post','put','delete'])

ajudo.updateOptions({new:true,runValidators:true})

module.exports = ajudo
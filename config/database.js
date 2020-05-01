const mongoose = require('mongoose')

module.exports = mongoose.connect(process.env.MONGO_URL,{
// module.exports = mongoose.connect("mongodb://localhost/dbMeAjuda",{
    useNewUrlParser: true
})
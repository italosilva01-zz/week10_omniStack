const mongoose = require('mongoose');
const PointSchema = require('../util/PointSchema')
const DevSchema = new mongoose.Schema({
    //esse trecho sempre irá se repetir quando for criar
    //um model
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs:[String],
    location:{
        type:PointSchema,
        index:'2dsphere'
    }
});
module.exports = mongoose.model('Dev',DevSchema);
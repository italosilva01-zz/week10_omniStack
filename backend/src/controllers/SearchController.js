const Dev = require('../models/Dev')
const parseStringAsArray = require('../util/ParseStringAsArray');

module.exports = {
    async index(request,response){
        const {latitude, longitude,techs} = request.query;
        const techsArray = parseStringAsArray(techs);
        
        const devs = await Dev.find();

        
        return response.json({devs});

    }
}
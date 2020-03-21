const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../util/ParseStringAsArray');
module.exports = {

    async index(request,response){
        const devs = await Dev.find();

        return response.json(devs);
    },



    async store(request, response) {
        //request pode conter informações do cliente
        //response é a resposta do backend para o cliente 
        const {
            github_username,
            techs,
            latitude,
            longitude
        } = request.body;

        let dev = await Dev.findOne({
            github_username
        });
        if (!dev) {

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const {
                name = login, avatar_url, bio
            } = apiResponse.data;
            //pegando as tecnologias do Dev.
            const techsArray = parseStringAsArray.parseStringAsArray(techs);
            //cadastrando Dev
            const location = {
                type: 'Point',  
                coordinates: [longitude, latitude],
            }
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })

        }
        return response.json(dev); //enviando a resposta para o front-end
    }
}
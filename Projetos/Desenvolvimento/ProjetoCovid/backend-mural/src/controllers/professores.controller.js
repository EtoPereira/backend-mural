const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const professor = await connection('professores').select('*');

        return response.json(professor);
    },
    async create(request, response) {
        const {nome, email, senha} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('professores').insert({
            id,
            nome,
            email,
            senha
        })
        return response.json({id})
    }
    
}
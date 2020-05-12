const connection = require('../database/connection');
const crypto = require('crypto')

module.exports = {

    async index(request, response) {
        const turmas = await connection('turmas').select('*');

        return response.json(turmas);
    },
    async create(request, response) {
        const { turma_ano } = request.body;
        const id = crypto.randomBytes(3).toString('HEX');


        await connection('turmas').insert({
            id,
            turma_ano
        })

        return response.json();
    }
}
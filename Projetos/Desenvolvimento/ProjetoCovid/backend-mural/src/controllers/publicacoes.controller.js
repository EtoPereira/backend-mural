const connection = require('../database/connection');
const crypto = require('crypto')

module.exports = {

    async index(request, response) {

        const { page = 1 } = request.query;

        const [count] = await connection('publicacoes').count();

        const publicacoes = await connection('publicacoes').select('*')
            .join('professores', 'professor_id', '=', 'publicacoes.professor_id')
            .limit(10)
            .offset((page - 1) * 10)
            .select([
                'publicacoes.*',
                'professores.nome',
                'professores.email',
            ]);

            response.header('X-TOTAL-COUNT', count['count(*)']);

        return response.json(publicacoes);
    },
    async create(request, response) {
        const { titulo, descricao, data } = request.body;
        const professor_id = request.headers.authorization;


        const [id] = await connection('publicacoes').insert({
            titulo,
            descricao,
            data,
            professor_id

        })

        return response.json({id});
    },
    async delete(request, response) {
        const {id} = request.params;
        const professor_id = request.headers.authorization;

        const publicacao = await connection('publicacoes')
        .where('id', id)
        .select('professor_id')
        .first();

        if(publicacao.professor_id !== professor_id) {
            return response.status(401).json({error:'Not Permited.'})
        }

        await connection('professores').where('id', id).delete();

        return response.status(204).send();
    }


}
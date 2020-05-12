const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const professor_id = request.headers.authorization;

        console.log(professor_id);

        const publicacoes = await connection('publicacoes')
        .where('professor_id', professor_id)
        .select('*');

        console.log(publicacoes)

        return response.json(publicacoes);
    }
}
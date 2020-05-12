const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {id, senha} = request.body;
        console.log({id, senha});

        const professor = await connection('professores')
        .where('id', id)
        .select('nome')
        .first();

        console.log(professor);

        if(!professor){
            return response.status(400).json({error: 'Not found'});
        }
        return response.json(professor);
        
        
    }
}
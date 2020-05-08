const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const cases = await connection('cases').select('*');

        return response.json(cases);
    },

    async create(request, response){
        const users_id = request.headers.authorization;
        const {title, description} = request.body;

        const [id] = await connection('cases').insert({
            title, description, users_id
        });

        return response.json({ message: 'Caso nº ' + id + ' cadastrado' })
    },

    async deleteOne(request, response){
        const { id } = request.params;
        const users_id = request.headers.authorization;

        await connection('cases')
            .select('users_id')
            .where('id', id)
            .first();

        await connection('cases').where('id', id).delete();
        
        return response.status(204).send();
    }
}
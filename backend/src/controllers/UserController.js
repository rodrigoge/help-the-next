const bcrypt = require('bcryptjs');
const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        const users = await connection('users').select('*');
        return response.json({ users })
    },

    async login(request, response){
        const {email, password} = request.body;

        const [user] = await connection('users')
            .select('*')
            .where('email', email)

        if(!user){
            return response.status(400).send({ error: 'Usuário não encontrado' });
        } else if(!await bcrypt.compare(password, user.password)){
            return response.status(400).send({ error: 'Senha incorreta' })
        } else {
            return response.send({ 
                message: 'Login efetuado sucesso',
            })
        }

    },

    async create(request, response){
        const {id, name, phone, email, password, type} = request.body;

        try {
            const user = await connection('users')
                .select('*')
                .where('email', email);

            const hash = await bcrypt.hash(password, 10);

            if(!user || user == ""){
                const users = await connection('users').insert({
                    id, 
                    name, 
                    phone, 
                    email, 
                    password : hash,
                    type
                });
        
                return response.status(201).json({ 
                    message: 'Cadastrado com sucesso'
                })
            }
                
            return response.status(401).send({ error: 'Usuário já existe' })

        } catch (error) {
            return response.status(400).send({ error: 'Falha ao cadastrar' })
        }
    },

    async delete(request, response){
        await connection('users').select('*').delete();
        return response.send();
    },
}
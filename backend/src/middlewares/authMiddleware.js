const jwt = require('jsonwebtoken')
const auth = require('../utils/auth.json');

module.exports = (request, response, next) => {
    const header = request.headers.authorization;

    if(!header){
        return response.status(401).send({ error: 'Nenhum token informado' });
    }

    const parts = header.split(' ');

    if(!parts.length === 2){
        return response.status(402).send({ error: 'Erro de token' });
    }

    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme)){
        return response.status(403).send({ error: 'Token mal-formatado' });
    }

    jwt.verify(token, auth.secret, (err, decoded) => {
        if(err) 
            return response.status(404).send({ error: 'Token inválido' });

        request.userId = decoded.id;
        return next();
    });
}
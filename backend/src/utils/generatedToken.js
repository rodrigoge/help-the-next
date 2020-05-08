const jwt = require('jsonwebtoken');
const auth = require('../utils/auth.json');

module.exports = function generatedToken(params = {}){
    return jwt.sign(params, auth.secret, {
        expiresIn: 86400,
    })
}
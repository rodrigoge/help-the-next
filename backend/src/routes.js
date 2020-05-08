const express = require('express');
const routes = express.Router();
const {celebrate, Segments, Joi} = require('celebrate');
const userController = require('./controllers/UserController');
const caseController = require('./controllers/CaseController');

routes.get("/users", userController.index);

routes.post("/register", celebrate({
    [Segments.BODY] : Joi.object().keys({
        name: Joi.string().required(),
        phone: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required(),
        type: Joi.string().required()
    })
}), userController.create);

routes.post("/", celebrate({
    [Segments.BODY] : Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required()
    })
}), userController.login);

routes.post("/cases", celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),

    [Segments.BODY] : Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required()
    })
}),caseController.create);

routes.get("/cases", caseController.index);

routes.delete("/cases/:id", celebrate({
    [Segments.PARAMS] : Joi.object().keys({
        id: Joi.number().required()
    })
}), caseController.deleteOne);


routes.delete("/users", userController.delete);

module.exports = routes;
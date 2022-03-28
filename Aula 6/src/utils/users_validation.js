const create = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    origem: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    força: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    poder: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    create,
};
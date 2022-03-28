const { UsersModel } = require('../infrastructure/database');

const UsersRepository = {
    async create(data) {
        try {
            const model = new UsersModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async list() {
        try {
            const result = await UsersModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },

};

module.exports = UsersRepository;
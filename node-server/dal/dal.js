const Model = require('../models/model');

const createUserInDB = async(body)=>{
    await Model(body).save();
}

const getUsersFromDB = async()=>{
    return await Model.find()
}

module.exports = {
    createUserInDB,
    getUsersFromDB
}
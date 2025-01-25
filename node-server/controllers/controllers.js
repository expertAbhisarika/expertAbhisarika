const logger = require("../utility/logger")
const Dal = require('../dal/dal');
const nodeCache = require('node-cache');
const cache = new nodeCache()
const createUser = async(req, res)=>{
    try {
        await Dal.createUserInDB(req.body);
        cache.del('users');
        res.send({status: 200, success: true});
    } catch (error) {
        logger.log(error);
    }
}

const getUsers = async(req,res)=>{
    try {
        let users = []
        if(cache.has('users')){
            users = JSON.parse(cache.get('users'));
        }else{
            users = await Dal.getUsersFromDB();
        }
        cache.set('users', JSON.stringify(users));
        res.send({status: 200, users});
    } catch (error) {
        logger.log(error);
    }
}

module.exports = {
    createUser,
    getUsers
}
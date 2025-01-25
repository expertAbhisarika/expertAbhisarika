const jwt = require('jsonwebtoken');
const secretkey = `f5677@$#tvthKJK98$&%*%*@#fguya`;
const expirationTime = '24h'

const generateToken = (userid)=>{
    return jwt.sign(userid, secretkey, expirationTime);
}

const authenticateToken = (req,res,next)=>{
    const token = req.headers['Authorization'] || req.headers['Bearer Token'];
    if(!token) return res.status(401).json({error: 'Access denied!'});
    try {
        const decodedToken = jwt.verify(token);
        req['userid'] = decodedToken.userid;
        next();
    } catch (error) {
        res.status(401).json({error: 'Invalid Token'});
    }
}

module.exports = {
    generateToken,
    authenticateToken
}
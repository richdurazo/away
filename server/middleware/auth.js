const jwt = require('jsonwebtoken');

const jwtchecker = (req, res, next) => {
    console.log(req.headers.authorization);
    try {
      const profile = jwt.verify(req.headers.authorization, process.env.AUTH_SECRET);
      req.profile = profile;
      next();
    } catch(err) {
        res.status(404).send('invalid token');        
    }
}

module.exports = {
    jwtchecker
}
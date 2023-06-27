const jwt = require('jsonwebtoken');
const { secret } = require('../../config/server');

function authorization(req, res, next){
  try {
    let bearerToken = req.headers["authorization"];
    const token  = bearerToken.split(' ')[1]
    if (!token) {
      return res.status(403).send({
        message: "Nenhum token fornecido!"
      });
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          return res.status(401).send({
            message: "Sem autorização!"
          });
        }
        req.userId = decoded.id;
        next();
    });
  } catch (error) {
    return res.status(403).send({
        message: "Nenhum token fornecido!"
    });
  }
}

module.exports = {
    authorization
}
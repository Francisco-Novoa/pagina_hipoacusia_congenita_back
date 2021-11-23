const jwt = require("jsonwebtoken")
const config = require("../utils/config")

const TokenValidation = (request, response, next) => {
    //function to validate a jwt token

    //if there is no token abort.
    const header = request.get("authorization")
    if (!header) return response.sendStatus(403)

    //separate the token from the bearer
    token=header.split(" ")[1]

    //extract the user and id from the token
    const {username, id} = jwt.verify(token, config.SECRET)

    //asignt the user and the id to the request.body object 
    Object.assign(request.body,{username,id})

    //and send it down the chain
    next()
}

module.exports={TokenValidation}
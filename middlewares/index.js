const valJWT  = require("../middlewares/validar-jwt");
const valROLE = require("../middlewares/validar-roles");
const valUSER = require("../middlewares/validate");

module.exports = {
    ...valJWT,
    ...valROLE,
    ...valUSER
}
const {Localidades} = require('../models/localidades')
const {validationResult} = require('express-validator')

const validarCampos = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errores:errors.array()})
    }

    next();
};

const localidadExiste = async(nombre) => {
    const nombreDb = await Localidades.findOne({nombre});
    if(nombreDb){
        throw new Error("La localidad ya existe")
    }
};

module.exports = {
    validarCampos,
    localidadExiste,
}
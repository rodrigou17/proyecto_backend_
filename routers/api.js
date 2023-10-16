const express = require('express');
const {check} = require('express-validator')
const router  = express.Router();
const apiController = require('../controllers/apiController');
const{localidadExiste, validarCampos} = require('../middlewares/validators');

router.get('/lista', apiController.getApi)

router.post('/agregar', 
    [
        check("nombre", "El nombre de la localidad es obligatorio").not().isEmpty(),
        check("nombre").custom(localidadExiste),
        validarCampos
    ], 
    apiController.postApi
);

router.put('/actualizar/:id',
    [
        check("id", "No es un ID válido").isMongoId(),
        validarCampos
    ], 
    apiController.putApi
);

router.delete('/borrar/:id',
    [
        check("id", "No es un ID válido").isMongoId(),
        validarCampos
    ], 
    apiController.deleteApi
);

router.get('/busqueda',apiController.busquedaPersonaje)


module.exports = router
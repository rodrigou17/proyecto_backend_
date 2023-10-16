const {Schema, model} = require('mongoose')

const schema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    pais: {
        type: String,
        required: true
    },
    departamento: {
        type: String,
        required: true
    },
    altitud: {
        type: Number,
        required: true
    },
    poblacion: {
        type: Number,
        required: true
    },
    gentilicio: {
        type: String,
    },
    img: {
        type: String
    }
})

const Localidades = model('Localidade', schema);
module.exports = {Localidades}
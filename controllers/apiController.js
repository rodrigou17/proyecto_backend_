const {Localidades} = require('../models/localidades')
const axios = require('axios')


class ApiController {
    async getApi  (req, res)  {
        const list = await Localidades.find();
        console.log(list)
        res.status(200).json({
            msg: "Todas las localidades de la Base de Datos", 
            list
        })
    }
    async postApi  (req, res)  {
        try {
            const newLocalidad = new Localidades(req.body)
            await newLocalidad.save()
            console.log(newLocalidad)
            res.status(201).json({
                msg: "Localidad agregada con éxito", 
                newLocalidad
            })
        } catch (error) {
            console.log(error)
            res.status(400).json(error)
        }
    }
    async putApi  (req, res)  {
        const {id} = req.params;
        const {nombre, pais, departamento, altitud, poblacion, gentilicio, img, ...resto} = req.body
        await Localidades.findByIdAndUpdate(id, {$set: {resto, nombre, pais, departamento, altitud, poblacion, gentilicio, img}});
        console.log(id)
        res.status(201).json({
            msg: "localidad actualizada con éxito",
        }) 
    }
    async deleteApi  (req, res)  {
        const {id} = req.params 
        await Localidades.findByIdAndDelete(id);
        console.log(id)
        res.status(204).json({
            msg: "localidad borrada con éxito",
        })
    }
    async busquedaPersonaje  (req, res)  {
        try {
            const {data,status} = await axios.get('https://rickandmortyapi.com/api/character/2')
            res.json(status,data)
        } catch (error) {
            res.status(404).json({status: error.response.status, data: error.response.data})
        } 
    }
}


module.exports = new ApiController
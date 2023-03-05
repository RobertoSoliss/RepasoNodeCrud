import express from 'express'
import {pool} from './db.js'
import { PORT } from './deploy.js'

const app = express()

app.get('/ping',async(req, res)=>{
    const [result]=await pool.query(`select * from personajes;`)
    res.json(result)
})

app.get('/',(req, res)=>{
    res.send('RESPUESTA DEL SERVIDOR')
})



app.listen(PORT)
console.log(`Escuchando en el puerto ${PORT}`)

const express = require ('express');
const send = require('send');
const app = express ();

const {trabajo} = require('./datos/tareas')

//Routers

const routerLlegadas = require('./routers/usuario');
app.use('/api/tareas/usuarios',routerLlegadas );


//Routing 

app.get('/',(req, res)=>{
    res.send('Mi primer servidor.cursos')
} )

app.get('/api/trabajo', (req, res)=>{
    res.send(trabajo)
})

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () =>{
console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`)
} );
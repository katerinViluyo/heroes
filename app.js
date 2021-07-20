

const express = require('express');
const app = express();
const path = require('path') ;
const port = 3030;

// ius para conf. metodo static para acceder a imagenes
app.use(express.static('public'));

//app.get('/',(req,res)=> res.send('bienvenido a mi sitio wed')    )
app.get('/',(req,res)=> res.sendFile (path.join(__dirname,'views', 'index.html')))


//rutas a  html
app.get('/babbage',(req,res)=> res.sendFile (path.join(__dirname,'views', 'babbage.html')))
app.get('/berners-lee',(req,res)=> res.sendFile (path.join(__dirname,'views', 'berners-lee.html')))
app.get('/clarke',(req,res)=> res.sendFile (path.join(__dirname,'views', 'clarke.html')))
app.get('/hamilton',(req,res)=> res.sendFile (path.join(__dirname,'views', 'hamilton.html')))
app.get('/hopper',(req,res)=> res.sendFile (path.join(__dirname,'views', 'hopper.html')))
app.get('/turing',(req,res)=> res.sendFile (path.join(__dirname,'views', 'turing.html')))

app.get('/lovelace',(req,res)=> res.sendFile (path.join(__dirname,'views', 'lovelace.html')))
// levanto servidor pra luego direccionar a las rutas
app.listen(port,()=> console.log(`servidor corriendo en http://localhost:${port}`))



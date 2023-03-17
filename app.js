const http = require('http');
const express = require('express');
const bodyParser= require('body-parser');
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req,res)=>{
    
    const valores={
        encabezado:"⚡¡Bienvenidos!",
            titulo:"Inicio",
            inicio: 'yellow'
    }

    res.render('index.html', valores)
})
app.get('/productos', (req,res)=>{
    
    const valores={
        encabezado:"Nuestros disfraces",
            titulo:"Productos"
    }
    
    res.render('productos.html', valores)
});
app.get('/info', (req,res)=>{
    
    const valores={
        encabezado:"¿Quienes somos?",
            titulo:"Nosotros"
    }

    res.render('Nosotros.html', valores)
})
app.get('/contacto', (req,res)=>{

    const valores={
        encabezado:"Contactanos",
            titulo:"Contactos"
    }

    res.render('contactos.html', valores)
})
app.get('/login', (req,res)=>{

    res.render('login.html', {titulo:"Inicia sesion", encabezado:"Inicio de sesion"})
})
app.get('/registro', (req,res)=>{

    res.render('registro.html', {titulo:"Registro", encabezado:"Registrate"})
})
app.get('/recu', (req,res)=>{

    res.render('recu.html', {titulo:"Recuperar", encabezado:"Recuperar contraseña"})
})
const servidor = http.createServer((req, res)=>{

    if(req.url === '/'){
        const valores = {
            encabezado:"Aprende a programar",
            titulo:"Inicio"
        }
        res.render('inicio.html', valores );
    }else if(req.url === '/productos'){
        
    }else if(req.url === '/info'){
        res.render('Nosotros.html', {encabezado:'Sobre nosotros'});
    }else if(req.url ==='/contacto'){
        
    }
})

const puerto = 3000;
app.listen(puerto,()=>{
    console.log('iniciando puerto 3000');
})


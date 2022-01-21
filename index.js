const express = require('express');
const path = require('path');

const app = express();
app.use('/mysite',express.static(path.join(__dirname, 'client')));
app.get('/',(req,res)=>{
    res.type('txt');
    res.send('<h1>Olá Mundo</h1>')
})
app.post('/',(req,res)=>{
    res.type('txt');
    res.send('<h1>Olá Mundo post</h1>')
})
app.put('/',(req,res)=>{
    res.type('txt');
    res.send('<h1>Olá Mundo put</h1>')
})
app.delete('/',(req,res)=>{
    res.type('txt');
    res.send('<h1>Olá Mundo del</h1>')
})
const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Rodando na porta ${PORT
    }`)
})
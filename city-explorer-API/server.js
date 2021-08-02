const express = require ('express')
const app =express ()
const PORT = 7550
app.get('/',(req,res)=>{ 
    res.send('hello');});

    app.listen( PORT);


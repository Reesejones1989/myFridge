const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req,res) => {
    var number_of_bottles = 99;
    // var link = `${count}`

    res.send(`<h1>${number_of_bottles} Bottles of Beer on the Wall</h1>  <a href = /${number_of_bottles -1}>take one down, pass it around</a>`)
})

app.get('/:number_of_bottles', (req,res) => {
    console.log(req.params.number_of_bottles)

    if (req.params.number_of_bottles > 0){

    res.send(`<h1> ${req.params.number_of_bottles} Bottles of Beer on the Wall</h1>
    <a href =${req.params.number_of_bottles -1}>take one down, pass it around</a>`)
    } 
    else{
        var number_of_bottles = 99
        res.send(`<h1>${number_of_bottles} Bottles of Beer on the Wall</h1>  <a href = /${number_of_bottles -1}>take one down, pass it around</a>`)}
  
 
        
    
})


app.listen(3001, function(){
    console.log('Listening on Port 3001')
})
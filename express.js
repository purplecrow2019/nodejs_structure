const express = require('express');
const app = express();


app.get('/test_api' , function(req,res){
    res.send('okays');
});

app.listen(3000,function(){
    console.log('started listening at port 3000');
})

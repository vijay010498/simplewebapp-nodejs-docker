const express = require('express');

const app = express();

app.get('/', (req, res) =>{
   res.send('Hi there this is running in  docker container bye');
});

app.listen(8090, () =>{
   console.log('Listening on port 8090');
});

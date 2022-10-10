const express = require('express');

const app = express();

function delay(duration) {
     const startTime = Date.now();
     while(Date.now() - startTime < duration) {
        
     }
}

app.get('/', (req, res) => {
    res.send(`Performance example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
    delay(4000);
    res.send(`Time has expired ${process.pid}`);
});

console.log('running server.js')
console.log('Worker process started');
app.listen(3000);


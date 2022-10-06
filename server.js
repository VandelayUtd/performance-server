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
    delay(9000);
    res.send(`Timer finished ${process.pid}`);
});

console.log('running server.js')
console.log('Worker process started');
app.listen(3000);


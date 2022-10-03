const express = require('express');
const cluster = require('cluster');
const os = require('os');



const app = express();

function delay(duration) {
     const startTime = Date.now();
     while(Date.now() - startTime < duration) {
        
     }
}

app.get('/', (req, res) => {
    // JSON.stringify({}) => "{}"
    // JSON.parse("{}") => {}
    res.send(`Performance example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
    delay(9000);
    res.send(`Timer finished ${process.pid}`);
});

console.log('running server.js')
if (cluster.isMaster) {
    console.log('Master has been started');
    const NUM_WORKERS = os.cpus().length;
    for (let i = 0; i < NUM_WORKERS; i++) {
        cluster.fork();
    };
} else {
    console.log('Worker process started');
    app.listen(3000);
};


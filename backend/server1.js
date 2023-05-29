const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('a');
});


// app.get('/getData', async (req, res) => {
//     const result = await axios.get("http://localhost:4001/getData");
//     console.log(result.data)
//     res.send('a');
// });

app.get('/getData', async (req, res) => {
    try {
        const result = await axios.get("http://localhost:4001/getData");
        res.send(JSON.stringify(result));
    } catch (error) {
        console.error(error);
        res.status(500).send('Error occurred');
    }
});

app.post('/addData', async (req, res) => {
    try {
        const requestData = req.body;
        const result = await axios.post("http://localhost:4001/addData", requestData.data);
        res.send(JSON.stringify(result));
    } catch (error) {
        console.error(error);
        res.status(500).send('Error occurred');
    }
});

app.listen(4000, () => {
    console.log('서버가 실행되었습니다.');
});
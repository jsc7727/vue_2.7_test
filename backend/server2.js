const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());


const data = [{ id: Date.now(), title: "asdfqwer" }];

app.get('/', (req, res) => {
    res.send('server2');
});

app.get('/getData', (req, res) => {
    const result = JSON.stringify(data);
    res.send(result);
});

app.post('/addData', (req, res) => {
    const requestData = req.body;
    console.log(requestData)
    data.push(requestData.data)
    res.send('ok');
});



app.listen(4001, () => {
    console.log('서버가 실행되었습니다.');
});
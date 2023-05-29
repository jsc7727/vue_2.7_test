const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());


const data = [{ id: Date.now(), title: "asdfqwer" }];

app.get('/', (req, res) => {
    res.send('server2');
});

app.get('/getData', (req, res) => {
    const result = JSON.stringify(data);
    res.send(result);
});

app.get('/addData', (req, res) => {
    const { data } = req.body;
    const result = JSON.parse(data);
    data.push(result)
    res.send('ok');
});



app.listen(4001, () => {
    console.log('서버가 실행되었습니다.');
});
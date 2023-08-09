const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello world!');
});

baseRouter.post('/add', (req, res) => {
    let num1 = req.body.first;
    let num2 = req.body.second;
    let ans = num1+num2;
    res.json({ "result": ans });
});


baseRouter.post('/subtract', (req, res) => {
    let num1 = req.body.first;
    let num2 = req.body.second;
    let ans2 = num1-num2;
    res.json({ "result": ans2 });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});
const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client")))
//web-push

const publicVapidKey = 'BMoYY7W8EV8QSTpgAhMqWdUKYFyFk_cIO32SPXcrs9CWM2tOf-xhRMuihQfFEjYjBW_wM6OZHuGMWc2Aih3PEPo';
const privateVapidKey = '8aq1DdTpkdxUQs5SEAgiDjmJ0I2z3XlUEyEhbco4YHs';

//setting vapid keys details
webpush.setVapidDetails('mailto:tafa1030@gmail.com', publicVapidKey,privateVapidKey);

app.post('/subscribe', (req, res) => {
    const subscription = req.body;
    res.status(201).json({});
    const payload = JSON.stringify({ title: "Hello World", body: "This is your first push notification" });

    webpush.sendNotification(subscription, payload).catch(console.log);
})


const PORT = 5001;

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});


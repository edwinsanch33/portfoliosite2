require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const port = process.env.PORT || 8080


const sendGrid = require('@sendGrid/mail');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(cors());

app.use((req,res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.edwin-sanchez.com/');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/api', (req, res, next) => {
  res.send('API Status: Running Running and Running Running')
});

app.post('/api/email', (req, res, next) => {

  console.log(req.body);

  sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'edwinsanch33@gmail.com',
    from: req.body.email,
    subject: 'Website Contact',
    text: `From: ${req.body.fullName} Message: ${req.body.message}`,
  }

  sendGrid.send(msg)
    .then(result => {
      res.status(200).json({
        success: true
      })
    })
    .catch(err => {
      console.log('error', err);
      res.status(401).json({
        success: false
      });

    });
});

app.listen(port, '0.0.0.0');

require('dotenv').config();
const {secrets} = require('./sendgridkey')

const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');

const port = process.env.PORT || 8080


const sendGrid = require('@sendgrid/mail');

const app = express();
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(cors());

app.use((req,res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api', (req, res, next) => {
  res.send('API Status: Running Running and Running Running')
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/api/email', (req, res, next) => {

  console.log(req.body);

  sendGrid.setApiKey(secrets);
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

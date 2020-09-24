const sendgridkey = require('./sendgridkey')

sendgridkey.load().then(() => require('./server'))

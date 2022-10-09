var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dotronghoang95@gmail.com',
    pass: 'xgqynsxwfmhmiamo'
  }
});

var mailOptions = {
  from: 'dotronghoang95@gmail.com',
  to: 'dongle2606@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Ê ku</h1>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
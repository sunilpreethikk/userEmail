const nodemailer = require("nodemailer");
var knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
    host : 'usersdb.cxhpfclo8prv.us-east-1.rds.amazonaws.com',
    user : 'sunilpreethik',
    password : 'sunilpreethik',
    database : 'users'
  }
});

let transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0d06cff5e33f71",
    pass: "bb9b6de8d2b80a"
  }
});

let mail = {
  from: 'sunilpreethik.k@gmail.com',
  to: '',
  subject: 'Test Email',
  text: 'Hello There!!!'
};

db('users').count('email')
  .then (count => {
  getUserEmail(count[0].count);
  console.log(count[0].count);
});

//getUserEmail(10);

function getUserEmail(count){
  for(let i = 0; i < count; i++){
    db.table('users').pluck('email')
    .then( user => {
      mail.to = user[i];
      console.log(mail.to)

      //The smtp service provider which is being used allows only 5 emails per second and maximum 
      //of 500 emails per account for the free version.

      //Uncomment line 51 && 36 and comment line 32 to send real emails. 
      //The count value is changed to small number to meet the limitations set by the smtp service provider 

      //sendMail(mail) 
    })
  }
}

function sendMail(mail){
  transporter.sendMail(mail, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

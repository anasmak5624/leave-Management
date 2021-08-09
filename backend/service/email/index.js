const http = require('http');
var nodemailer = require('nodemailer');
const moment = require('moment');
const calendar = require('ical-generator')();
module.exports = () => {
  let sendEmail = ({
    results
  }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const a = 'Sebastian Pekarek <mail@example.com>';
        const createCalender = await calendar.createEvent({
          start: moment(),
          end: moment().add(1, 'hour'),
          summary: 'Example Event',
          description: 'It works ;)',
          location: 'my room',
          url: 'http://sebbo.net/',
          organizer: a
        });
        var path = __dirname + '/uploads/' + 'new2' + '.ics';
        console.log(path)
        var t = await calendar.saveSync(path);
        var transporter = await nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'anasmak5624@gmail.com',
            pass: '0m/pc6ce'
          }
        });

        var mailOptions = {
          from: 'anasmak5624@gmail.com',
          to: 'mohd.anas@steppingcloud.com',
          subject: "test",
          text: "text testing",
          attachments: [
            {
              path: path
            }
          ]
        };
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        })
        resolve("Email Sent");

      } catch (error) {
        reject(error);
      }
    });
  }
  return {
    sendEmail
  }
}

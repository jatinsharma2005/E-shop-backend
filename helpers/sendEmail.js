const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const sendEmail = (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: process.env.MAIL_SERVICE,
    port: 465,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    from: process.env.EMAIL_USERNAME,
  });

  const mailOptions = {
    from: `my Comany <${process.env.EMAIL_FROM}>`,
    to: options.to,
    subject: options.subject,
    html: options.emailhtml,
    text: options?.emailtext || options.emailhtml,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;

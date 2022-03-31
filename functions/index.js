const functions = require("firebase-functions");
const config = functions.config();
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({origin: true});

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});

let mailOptions = {
  from: "Mia Codes",
};

exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const {
      name,
      email,
      phone,
      message,
      total,
      service,
      platforms,
      features,
      customFeatures,
      users,
      category,
    } = request.query;

    if (total) {
      if (category) {
        mailOptions = {
          from: "Mia Codes",
          to: "mia@miacodes.com",
          subject: "Estimate Received!",
          html: `
          <p style="font-size: 16px;">From: ${name}</p>
          <p style="font-size: 16px;">Email: ${email}</p>
          <p style="font-size: 16px;">Phone Number: ${phone}</p>
          <p style="font-size: 16px;">Message: ${message}</p>
          <p style="font-size: 16px;">Total: ${total}</p>
          <p style="font-size: 16px;">Service: ${service}</p>
          <p style="font-size: 16px;">Category: ${category}</p>
          `,
        };
      } else {
        mailOptions = {
          from: "Mia Codes",
          to: "mia@miacodes.com",
          subject: "Estimate Received!",
          html: `
          <p style="font-size: 16px;">From: ${name}</p>
          <p style="font-size: 16px;">Email: ${email}</p>
          <p style="font-size: 16px;">Phone Number: ${phone}</p>
          <p style="font-size: 16px;">Message: ${message}</p>
          <p style="font-size: 16px;">Total: ${total}</p>
          <p style="font-size: 16px;">Service: ${service}</p>
          <p style="font-size: 16px;">Platforms: ${platforms}</p>
          <p style="font-size: 16px;">Features: ${features}</p>
          <p style="font-size: 16px;">customFeatures: ${customFeatures}</p>
          <p style="font-size: 16px;">Users: ${users}</p>
          `,
        };
      }
      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          response.send(error);
        } else {
          response.send("Message sent successfully");
        }
      });
    } else {
      mailOptions = {
        from: "Mia Codes",
        to: "mia@miacodes.com",
        subject: "Message Received!",
        html: `
        <p style="font-size: 16px;">From: ${name}</p>
        <p style="font-size: 16px;">Email: ${email}</p>
        <p style="font-size: 16px;">Phone Number: ${phone}</p>
        <p style="font-size: 16px;">Message: ${message}</p>
        `,
      };

      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          response.send(error);
        } else {
          response.send("Message sent successfully");
        }
      });
    }
  });
});

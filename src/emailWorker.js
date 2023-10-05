const messenger = require("./messenger");
const sgMail = require("@sendgrid/mail");

// const eventHandler = messenger.getEventHandler({
//   queueName: process.env.QUEUE_NAME,
// });

const sendEmail = async (to, from, subject, text, html) => {
  sgMail.setApiKey(
    "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"
  );
  try {
    const msg = {
      to: to,
      from: from,
      subject: subject || "subject",
      text: text || "text",
      html: html || `<strong>${text}</strong>`,
    };
    const res = await sgMail.send(msg);

    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  sendEmail,
};

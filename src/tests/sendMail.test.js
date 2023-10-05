const sendEmail = require("../emailWorker").sendEmail;

describe("sendEmail", () => {
  test("send email function", async () => {
    await sendEmail(
      "or.assael@gmail.com",
      "or.assael+sendgrid@healthy.io",
      "Test Email",
      "This means the tests worked"
    );
  });
});

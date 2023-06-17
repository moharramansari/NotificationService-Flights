const { EmailService } = require("../services");

async function createTicket(req, res) {
  try {
    const response = await EmailService.createTicket({
      subject: req.body.subject,
      content: req.body.content,
      recipientEmail: req.body.recipientEmail,
      status: req.body.status,
    });
    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {
  createTicket,
};

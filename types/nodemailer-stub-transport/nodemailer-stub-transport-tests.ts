import nodemailer = require("nodemailer");
import stubTransport = require("nodemailer-stub-transport");

var transport = nodemailer.createTransport(stubTransport());
nodemailer.createTransport(stubTransport({ error: new Error('Invalid recipient') }));
transport = nodemailer.createTransport(stubTransport({ keepBcc: true }));

nodemailer.createTransport(stubTransport());

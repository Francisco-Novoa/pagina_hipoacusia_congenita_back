require("dotenv").config();

let PORT = process.env.PORT;
let MONGOUSER = process.env.MONGOUSER;
let MONGOPASS = process.env.MONGOPASS;
let MONGOHOST = process.env.MONGOHOST;
let SECRET = process.env.SECRET;
let MAILJET0 = process.env.MAILJET0;
let MAILJET1 = process.env.MAILJET1;

if (process.env.NODE_ENV === "test") {
  MONGODB_URI = process.env.TEST_MONGODB_URI;
}

module.exports = {
  PORT,
  SECRET,
  MAILJET0,
  MONGOUSER,
  MONGOPASS,
  MONGOHOST,
  MAILJET1,
};

const bcrypt = require('bcryptjs');

module.exports = [
  {
    id: 1,
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    role: "admin"
  }
];
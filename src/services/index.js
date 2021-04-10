const sysUsers = require('./sys/users/users.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(sysUsers);
};

// Initializes the `sys/users` service on path `/sys-users`
const { Users } = require('./users.class');
const createModel = require('../../../models/users.model');
const hooks = require('./users.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/sys-users', new Users(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('sys-users');

  service.hooks(hooks);
};

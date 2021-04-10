const assert = require('assert');
const app = require('../../../src/app');

describe('\'sys/users\' service', () => {
  it('registered the service', () => {
    const service = app.service('sys-users');

    assert.ok(service, 'Registered the service');
  });
});

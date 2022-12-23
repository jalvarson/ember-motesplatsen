import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | explore/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:explore/index');
    assert.ok(route);
  });
});

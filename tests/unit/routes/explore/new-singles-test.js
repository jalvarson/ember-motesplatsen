import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | explore/new-singles', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:explore/new-singles');
    assert.ok(route);
  });
});

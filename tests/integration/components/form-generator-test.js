import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | form-generator', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders', async function(assert) {
    this.server.create('form-blueprint');

    const store = this.owner.lookup('service:store');
    const blueprint = await store.findRecord('form-blueprint', 1);

    this.set('blueprint', blueprint);
    this.set('onSubmit', function() {})

    await render(hbs`<FormGenerator @onSubmit={{this.onSubmit}} @blueprint={{this.blueprint}}/>`);
    // has three inputs
    assert.equal(this.element.querySelectorAll('input').length, 3);
    // has ember power select
    assert.ok(this.element.querySelector('.ember-power-select-trigger'));
    // has Continue button
    assert.equal(this.element.querySelector('button').textContent.trim(), "Continue");
  });
});

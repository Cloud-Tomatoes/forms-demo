import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import formBlueprint from 'forms-demo/utils/form-blueprint';

module('Integration | Component | form-generator', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    this.set('blueprint', formBlueprint.data)
    this.set('onSubmit', function(val) {})
    await render(hbs`<FormGenerator @onSubmit={{this.onSubmit}} @blueprint={{this.blueprint}}/>`);

    // has three inputs
    assert.equal(this.element.querySelectorAll('input').length, 3);
    // has Continue button
    assert.equal(this.element.querySelector('button').textContent.trim(), "Continue");
  });
});

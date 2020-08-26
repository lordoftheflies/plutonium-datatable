import { html, fixture, expect } from '@open-wc/testing';

import { PlutoniumDatatable } from '../src/PlutoniumDatatable.js';
import '../plutonium-datatable.js';

describe('PlutoniumDatatable', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el: PlutoniumDatatable = await fixture(html`
      <plutonium-datatable></plutonium-datatable>
    `);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el: PlutoniumDatatable = await fixture(html`
      <plutonium-datatable></plutonium-datatable>
    `);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el: PlutoniumDatatable = await fixture(html`
      <plutonium-datatable title="attribute title"></plutonium-datatable>
    `);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el: PlutoniumDatatable = await fixture(html`
      <plutonium-datatable></plutonium-datatable>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});

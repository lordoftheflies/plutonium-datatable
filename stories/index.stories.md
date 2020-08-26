```js script
import { html } from '@open-wc/demoing-storybook';
import '../dist/plutonium-datatable.js';

export default {
  title: 'PlutoniumDatatable',
  component: 'plutonium-datatable',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# PlutoniumDatatable

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add plutonium-datatable
```

```js
import 'plutonium-datatable/plutonium-datatable.js';
```

```js preview-story
export const Simple = () => html`
  <plutonium-datatable></plutonium-datatable>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <plutonium-datatable title="Hello World"></plutonium-datatable>
`;
```

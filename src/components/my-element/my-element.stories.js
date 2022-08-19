import { html } from 'lit'

import './my-element'

export default {
  title: 'My Element',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onOpen: { action: 'onClick' },
  },
  render: (args) => html`<my-element @click=${args.onOpen} name=${args.name}></my-element>`,
}

export const Default = {
  name: 'Default',
  args: {
    name: 'Lit',
  },
}

import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import './hy-button';

export default {
  title: 'Example/Button',
  component: 'hy-button',
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    }
  },
  parameters: {
    actions: {
      handles: ['hy-button:click', '`hy-header:logout'],
    },
  },
}

const Template = ({ primary, backgroundColor, size, label }) =>
  html`<hy-button
    ?primary="${primary}"
    size="${ifDefined(size)}"
    label="${ifDefined(label)}"
    background-color="${ifDefined(backgroundColor)}"
  ></hy-button>`;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
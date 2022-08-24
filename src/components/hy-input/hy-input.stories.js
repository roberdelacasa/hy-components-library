import { html } from 'lit';
import { userEvent, within, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { screen } from "shadow-dom-testing-library"

import './hy-input';

export default {
  title: 'Example/Input',
  component: 'hy-input',
  parameters: {
    actions: {
      handles: ['key-pressed', 'enter-pressed', 'focus-lost'],
    },
  },
}

const Template = ({ value, placeHolder }) =>
  html`<hy-input 
        .value="${value}"
        .placeHolder="${placeHolder}"
        ></hy-input>`;

export const Primary = Template.bind({});
Primary.args = {
  value: '',
  placeHolder: 'Search...'
};


Primary.play = async () => {
  const input = await screen.getByShadowTestId('input');

  await userEvent.type(input, 'example');
  await waitFor(() => expect(input).toHaveValue('example'));
};
import { html } from 'lit';

import './hy-header';

export default {
  title: 'Example/Header',
  component: 'hy-header',
  parameters: {
    actions: { 
      handles: [
        'hy-header:createAccount',
        'hy-header:login',
        'hy-header:logout'
      ]
    },
  },
};

const Template = ({
  user
}) => {
  return html`<hy-header
    .user=${user}
  ></hy-header>`;
};

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

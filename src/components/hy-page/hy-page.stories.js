import { html } from 'lit';

import * as HyHeaderStories from '../hy-header/hy-header.stories';

import './hy-page';

export default {
  title: 'Example/Page',
  component: 'hy-page',
};

const Template = ({ user }) => html`<hy-page .user="${user}"></hy-page>`;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HyHeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HyHeaderStories.LoggedOut.args,
};
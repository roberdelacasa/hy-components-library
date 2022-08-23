import { html, LitElement } from 'lit';

import { HyHeaderStyles } from './hy-header.styles.js';

import '../hy-button/hy-button';

export default class HyHeader extends LitElement {
  static styles = [HyHeaderStyles];

  static get properties() {
    return {
      user: {
        type: Object,
        reflect: true
      },
    };
  }

  constructor() {
    super();
    this.user = null;
  }

  render() {
    return html`
      <header>
        <div class="wrapper">
          <div>
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path
                  d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                  fill="#FFF"
                />
                <path
                  d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                  fill="#555AB9"
                />
                <path
                  d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
                  fill="#91BAF8"
                />
              </g>
            </svg>
            <h1>Acme</h1>
          </div>
          <div>
            ${this.logInOutButton()}
            <hy-button
              size="small"
              @click="${() => this.dispatchCustomEvent('createAccount')}"
              label="Sign up"
            >
            </hy-button>
          </div>
        </div>
      </header>
    `;
  }

  logInOutButton() {
    return this.user
      ? html`<hy-button
          size="small"
          @click="${() => this.dispatchCustomEvent('logout')}"
          label="Log out"
        ></hy-button>`
      : html`<hy-button
          size="small"
          @click="${() => this.dispatchCustomEvent('login')}"
          label="Log in"
        ></hy-button>`;
  }

  dispatchCustomEvent(eventName) {
    const options = {
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent(`hy-header:${eventName}`, options));
  };

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

const tagName = 'hy-header';
if(!window.customElements.get(tagName)) {
  window.customElements.define(tagName, HyHeader);
}

import { LitElement, html } from 'lit';

import { HyInputStyles } from './hy-input.styles.js';

class HyInput extends LitElement {
  static styles = [HyInputStyles];

  static properties = {
    _input: {
      type: Object
    },
    value: {
      type: String,
    },
    placeHolder: {
      type: String
    }
  };

  constructor() {
    super();
    this._input = {};
    this.value = '';
    this.placeHolder = 'Write something...';
  }

  render() {
    return html`
    <input
      type="text"
      placeholder="${this.placeHolder}"
      value="${this.value}"
      @keyup="${this._onKeyUp}"
      @blur="${this._onBlur}"
      data-testid="input">
    `;
  }

  firstUpdated() {
    this._input = this.shadowRoot.querySelector('input');
  }

  _onKeyUp(event) {
    // If Enter key pressed, fire 'enter-pressed'
    if(event.keyCode == 13) {
      this.dispatchEvent(new CustomEvent('enter-pressed', {
        detail: {
          value: this._input.value
        },
        composed: true,
        bubbles: true
      }));
      event.preventDefault();
    } else {
      // If any other key, fire 'key-pressed'
      this.dispatchEvent(new CustomEvent('key-pressed', {
        detail: {
          value: this._input.value
        },
        composed: true,
        bubbles: true
      }));
    }
  }

  _onBlur(event) {
    this.dispatchEvent(new CustomEvent('focus-lost', {
      detail: {
        value: this._input.value
      },
      composed: true,
      bubbles: true
    }));
  }
}

const tagName = 'hy-input';
if(!window.customElements.get(tagName)) {
  window.customElements.define(tagName, HyInput);
}
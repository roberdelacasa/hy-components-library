import { LitElement, html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

import { HyButtonStyles } from './hy-button.styles';

class HyButton extends LitElement {
  static styles = [HyButtonStyles];

  static properties = {
    label: {
      type: String,
      reflect: true
    },
    primary: {
      type: Boolean
    },
    size: {
      type: String
    },
    backgroundColor: {
      type: String,
      attribute: 'background-color'
    }
  };

  constructor() {
    super();
    this.primary = false;
    this.backgroundColor = null;
    this.size = 'small'
    this.label = '';
  };

  render() {
    const mode = this.primary ? 'hy-button--primary' : 'hy-button--secondary';
    const style = styleMap({ backgroundColor: this.backgroundColor ?? null });
    
    return html`
      <button
        type="button"
        class=${['hy-button', `hy-button--${this.size ?? 'medium'}`, mode].join(' ')}
        style=${style}
        @click="${this.onClick}"
      >
        ${this.label}
      </button>
    `;
  }

  onClick() {
    const options = {
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent('hy-button:click', options));
  }
}

const tagName = 'hy-button';
if(!window.customElements.get(tagName)) {
  window.customElements.define(tagName, HyButton);
}
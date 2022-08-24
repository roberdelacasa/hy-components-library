import { css } from 'lit';

export const HyInputStyles = css`
  * {
    box-sizing: border-box;
  }

  :host {
    display: inline-block;
    position: relative;

    /* Iron-icon smaller than input */
    --iron-icon-computed-size: calc(var(--hy-input-height, 30px) - 8px);
  }

  /* Iron icon depends on input styles to fit inside */
  iron-icon {
    display: none;
    position: absolute;
    --iron-icon-height: var(--iron-icon-computed-size, 22px);
    --iron-icon-width: var(--iron-icon-computed-size, 22px);
    --iron-icon-fill-color: var(--hy-input-icon-fill-color, currentcolor);
    --iron-icon-stroke-color: var(--hy-input-icon-stroke-color, none);
  }
  iron-icon:hover {
    cursor: pointer;
  }

  /* Display icon if it's positioned */
  :host([icon-right]) > iron-icon {
    display: inline;
    right: 4px;
    top: 4px;
  }
  :host([icon-left]) > iron-icon {
    display: inline;
    left: 4px;
    top: 4px;
  }

  /* Input style */
  input {
    width: var(--hy-input-width, 250px);
    height: var(--hy-input-height, 30px);
    padding: 5px;
    border: var(--hy-input-border, 1px solid black);
    background-color: var(--hy-input-background-color, white);
    font-size: var(--hy-input-font-size, calc(var(--hy-input-height) / 1.8));
    color: var(--hy-input-text-color, inherit);
  }
  input:focus {
    border: var(--hy-input-border-focus, 1px solid #4d90fe);
  }

  /* Padding space for iron-icon */
  :host([icon-right]) > input {
    padding-right: var(--hy-input-height, 30px);
  }
  :host([icon-left]) > input {
    padding-left: var(--hy-input-height, 30px);
  }

  /* Text direction */
  :host([text-right]) > input {
    text-align: right;
  }
  :host([text-left]) > input {
    text-align: left;
  }

  /* Placeholder color */
  ::placeholder {
    color: var(--hy-input-placeholder-color, #a0a0a0);
  }
  :-ms-input-placeholder {
    color: var(--hy-input-placeholder-color, #a0a0a0);
  }
  ::-ms-input-placeholder {
    color: var(--hy-input-placeholder-color, #a0a0a0);
  }
`;
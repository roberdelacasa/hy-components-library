import { css } from 'lit';

export const HyButtonStyles = css`
  .hy-button {
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
  }
  .hy-button--primary {
    color: white;
    background-color:  #00C0B5;
  }
  .hy-button--secondary {
    color: #00C0B5;
    background-color: white;
    border: 2px solid #00C0B5;
    box-shadow: rgba(0, 0, 0, 0.15) 0 0 0 1px inset;
  }
  .hy-button--small {
    font-size: 12px;
    padding: 10px 16px;
  }
  .hy-button--medium {
    font-size: 14px;
    padding: 11px 20px;
  }
  .hy-button--large {
    font-size: 16px;
    padding: 12px 24px;
  }
`;
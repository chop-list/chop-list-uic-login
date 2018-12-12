import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `chop-list-bc-login`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ChopListBcLogin extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'chop-list-bc-login',
      },
    };
  }
}

window.customElements.define('chop-list-bc-login', ChopListBcLogin);

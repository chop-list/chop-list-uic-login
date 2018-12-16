import { html, PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/paper-input/paper-input';
import '@polymer/paper-button/paper-button';

/**
 * `chop-list-uic-login`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ChopListUicLogin extends PolymerElement {
  static get template() {
    return html`
      <link rel="stylesheet" href="/chop-list-uic-login.css"/>
      <div id="pane">
        <div class="heading">
          <h2>[[title]]</h2>
          <div>Still dont have an account? <paper-button link class="link">{{registerButtonLabel}}</paper-button></div>
        </div>
        <div class="form">
          <div class="input">
            <paper-input id="username" label={{usernameLabel}}></paper-input>
            <paper-input id="password" label={{passwordLabel}} type="password"></paper-input>
          </div>
          <div>
            <paper-button class="link">{{forgotYourPassword}}</paper-button>
            <paper-button on-click="_login" class="button" raised>{{loginButtonLabel}}</paper-button>
          </div>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      title: {
        type: String,
        value: 'Who are you?',
      },
      usernameLabel: {
        type: String,
        value: 'Username',
      },
      passwordLabel: {
        type: String,
        value: 'Password',
      },
      loginButtonLabel: {
        type: String,
        value: 'Get in!',
      },
      forgotYourPassword: {
        type: String,
        value: 'Forgot your password?',
      },
      registerButtonLabel: {
        type: String,
        value: 'Register!',
      },
    };
  }

  _login() {
    this.dispatchEvent(new CustomEvent('login-btn-click'));
  }
}

window.customElements.define('chop-list-uic-login', ChopListUicLogin);

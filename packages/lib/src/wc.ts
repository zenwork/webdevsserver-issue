import Keycloak             from 'keycloak-js'
import { LitElement, html } from 'lit-element'

export class Wc extends LitElement {
  connectedCallback() {
    super.connectedCallback()
    /* remove/comment from here... */
    Keycloak(
      {
        url: '',
        realm: '',
        clientId: ''
      }
    )
    /* ...to here to eliminate bug */

  }

  render() {
    return html`<h1>No Bug!</h1>`
  }
}


customElements.define('my-wc', Wc)

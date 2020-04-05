import { html, css, LitElement } from 'lit-element';

export class WcTodo extends LitElement {
  static get styles() {
    return css`
      :host {
        --wc-todo-text-color: #000;

        display: block;
        padding: 25px;
        color: var(--wc-todo-text-color);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  // https://open-wc.org/codelabs/basics/lit-html.html?index=/codelabs/#2
  connectedCallback() {
    super.connectedCallback();
    console.log('lit element connected');
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}

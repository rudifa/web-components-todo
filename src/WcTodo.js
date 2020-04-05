import { html, css, LitElement } from 'lit-element';

// https://open-wc.org/codelabs/basics/lit-html.html?index=/codelabs/#4
// define consts outside of the class, for insertion into the rendered html
const author = 'open-wc';
const homepage = 'https://open-wc.org/';
const footerTemplate = html`
  <footer>Made with love by <a href="${homepage}">${author}</a></footer>
`;

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
    this.todos = [{text: 'Do A', finished: true}, 
    {text: 'Do B', finished: false}, {text: 'Do C', finished: false}];
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
      <!-- embed a template in a template -->
      <ol>
        ${this.todos.map(todo => html`<li>${todo.text} (${todo.finished ? "finished" : "unfinished"})</li>`)}
      </ol>
      <p> ${footerTemplate}</p>
    `;
  }
}

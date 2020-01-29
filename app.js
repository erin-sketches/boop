import { html, Component, render } from './src/preact.module.js';
import * as THREE from './src/three.module.js';

function msg(etext) {
	let n = document.createElement('h5');
	if(typeof etext != 'string') {
		etext = JSON.stringify(etext);
	}
	n.textContent = etext;
	let d = document.getElementById('debug');
	d.appendChild(n);
}

msg('test');

class Note extends Component {
	render() {
		let s = this.props.children;
		//msg(JSON.stringify(s));
		let style = `width:${s.width};background:${s.set ? 'red':'black'};`;
		msg(style);
		let a = html`
				<div>
					<p>N O T E</p>
				</div>
			`;
	
		let b = html`
				<span style="${style}">
					CONTENT
				</div>
		`;
		
		return b;
	}
}

class Grid extends Component {
	
	constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
 		let n_notes = 3;
		let width = 25;
    this.state = { notes: [] };
		for(let i =0; i < n_notes; i++) {
			this.state.notes.push({
				set: false,
				width: width,
				x: width*i,
				y: 0
			})
		}
		msg("init state: "+JSON.stringify(this.state));
  }

	toggle(idx) {
		// wut
		const { notes = [] } = this.state;
		notes[idx].set = !notes[idx].set;
		this.setState({ notes: notes});		
	}
	render() {
		let c = html`
			<div>
				${this.state.notes.map(n => html`
					<${Note}>${n}<//>
				`)}
			</div>
		`;
		return c;
	}
}


window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
		msg('goodbye');
		let e = document.getElementById('app');
		render(html`<${Grid} />`, e);
		msg('?');
});
/*
class App extends Component {
	addTodo() {
		const { todos = [] } = this.state;
		this.setState({ todos: todos.concat(`Item ${todos.length}`) });
	}
	render({ page }, { todos = [] }) {
		return html`
			<div class="app">
				<${Header} name="ToDo's (${page})" />
				<ul>
					${todos.map(todo => html`
						<li>${todo}</li>
					`)}
				</ul>
				<button onClick=${() => this.addTodo()}>Add Todo</button>
				<${Footer}>footer content here<//>
			</div>
		`;
	}
}

const Header = ({ name }) => html`<h1>${name} List</h1>`

const Footer = props => html`<footer ...${props} />`

render(html`<${App} page="All" />`, document.body);
*/
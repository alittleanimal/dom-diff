import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createElement, render, renderDom} from './element'
import patch from './patch';
import diff from './diff';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

let virtualDom = createElement('ul', {class: 'list'}, [
  createElement('li', {class: 'item'}, ['hello 111']),
  createElement('li', {class: 'item'}, ['hello 222']),
  createElement('li', {class: 'item'}, ['hello 222'])
])

console.log(virtualDom);

let el = render(virtualDom);
console.log(el);
renderDom(el, document.getElementById('root'));


let virtualDom2 = createElement('ul', {class: 'list-group'}, [
  createElement('li', {class: 'item active'}, ['七里香']),
  createElement('li', {class: 'item'}, ['一千年以后']),
  createElement('li', {class: 'item'}, ['需要人陪'])
]);

let patches = diff(virtualDom, virtualDom2);
console.log(patches);
patch(el, patches);



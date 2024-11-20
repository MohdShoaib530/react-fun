import { createRoot } from 'react-dom/client';
import './index.css';
import React from 'react';

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Google'
};

// function MyApp() {
//   return <div>hello</div>;
// }

// const AnotherElement = (
//   <a href="https://google.com" target='_blank'>goo</a>
// )

const aReactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Google'
);
createRoot(document.getElementById('root')).render(aReactElement);


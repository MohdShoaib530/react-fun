function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  for (const key in reactElement.props) {
    if (key === 'children') {
      domElement.textContent = reactElement.props[key];
    } else {
      domElement.setAttribute(key, reactElement.props[key]);
    }
  }
  domElement.innerHTML = reactElement.children;
  container.appendChild(domElement);
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Google'
};

const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer);

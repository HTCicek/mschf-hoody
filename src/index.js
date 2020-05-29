const root = document.querySelector('#root');
let imgPage = document.querySelector('img');
const initialSrc = imgPage.src;

const clickHandler = (event) => {
  if (event.target.className === 'index') {
    let view = document.createElement('img');
    view.src = event.target.src.replace('index', 'hoodies/view');
    view.className = 'view';

    root.removeChild(event.target);
    window.history.replaceState(null, 'issa hoody', 'hoodies/view');

    root.appendChild(view);
  }
  if (event.target.className === 'view') {
    let confirmation = document.createElement('img');
    confirmation.src = event.target.src.replace('view', 'confirmation');
    confirmation.className = 'confirmation';

    root.removeChild(event.target);
    window.history.replaceState(null, 'gotcha', 'gotcha');

    root.appendChild(confirmation);
  }

  if (event.target.className === 'confirmation') {
    let index = document.createElement('img');
    index.src = event.target.src.replace('confirmation', 'index');
    index.className = 'index';

    root.removeChild(event.target);
    window.history.replaceState(null, 'check out these guys', 'hoodies');
    root.appendChild(index);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  window.history.replaceState(null, 'check out these guys', 'hoodies');
  document.addEventListener('click', clickHandler);
});

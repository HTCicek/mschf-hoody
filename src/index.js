const root = document.querySelector('#root');
let imgPage = document.querySelector('img');
const pubImgUrl =
  'https://htcicek.github.io/mschf-hoody/public/hoody_index.png';

const clickHandler = (event) => {
  if (event.target.className === 'index') {
    let view = document.createElement('img');
    view.src = pubImgUrl.replace('index', 'hoodies/view');
    view.className = 'view';

    root.removeChild(event.target);
    window.history.replaceState(null, null, 'hoodies/view');

    root.appendChild(view);
  }
  if (event.target.className === 'view') {
    let confirmation = document.createElement('img');
    confirmation.src = pubImgUrl.replace('index', 'confirmation');
    confirmation.className = 'confirmation';

    root.removeChild(event.target);
    window.history.replaceState(null, null, 'gotcha');

    root.appendChild(confirmation);
  }

  if (event.target.className === 'confirmation') {
    let index = document.createElement('img');
    index.src = pubImgUrl;
    index.className = 'index';

    root.removeChild(event.target);
    window.history.replaceState(null, null, 'hoodies');
    root.appendChild(index);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  window.history.replaceState(null, null, 'hoodies');
  document.addEventListener('click', clickHandler);
});

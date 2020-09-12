import loadpage from './landing';
import menupage from './menu';
import contactpage from './contact';


const navBar = () => {
  const nav = document.getElementById('navbar');
  const ul = document.createElement('ul');
  ul.classList.add('nav_list');

  const createTab = (tab, linkFunc) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.classList.add('nav_link');
    link.innerHTML = tab;
    link.addEventListener('click', linkFunc);
    li.append(link);
    ul.append(li);
  };

  createTab('Home', loadpage);
  createTab('Menu', menupage);
  createTab('Contact', contactpage);

  nav.append(ul);
};

export default navBar;
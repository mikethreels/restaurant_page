const loadpage = () => {
  console.log('running loadpage')
  const contentdiv = document.getElementById('content');
  while (contentdiv.firstChild) {
    contentdiv.removeChild(contentdiv.firstChild);
  }
  contentdiv.className = "";
  contentdiv.classList.add('landing');
  const img = document.createElement('img');
  const head = document.createElement('h1');
  const text = document.createElement('p');
  img.setAttribute("src", "../src/images/test.jpg");
  head.innerHTML = 'Breakfast and Brunch';
  text.innerHTML = 'because we always use fresh ingredients our products will taste the best';
  contentdiv.append(head);
  contentdiv.append(text);

}

export default loadpage;
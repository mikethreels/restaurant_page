const menupage = () => {
  console.log('running menupage')
  const contentdiv = document.getElementById('content');
  while (contentdiv.firstChild) {
    contentdiv.removeChild(contentdiv.firstChild);
  }
  const img = document.createElement('img');
  const head = document.createElement('h1');
  const text = document.createElement('p');
  img.setAttribute("src", "../src/images/test.jpg");
  head.innerHTML = 'Take a look at our menu';
  text.innerHTML = 'because we always use fresh ingredients our products will taste the best';
  contentdiv.append(head);
  contentdiv.append(text);
  contentdiv.append(img);
}

export default menupage;
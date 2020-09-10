const contactpage = () => {
  console.log('running contactpage')
  const contentdiv = document.getElementById('content');
  while (contentdiv.firstChild) {
    contentdiv.removeChild(contentdiv.firstChild);
  }
  contentdiv.className = "";
  contentdiv.classList.add('contact');
  const img = document.createElement('img');
  const head = document.createElement('h1');
  const text = document.createElement('h3');
  img.setAttribute("src", "../src/images/test.jpg");
  head.innerHTML = 'Would you like to book a table?';
  text.innerHTML = 'You can reach out to us!';
  contentdiv.append(head);
  contentdiv.append(text);

}

export default contactpage;
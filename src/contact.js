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
  const text = document.createElement('h2');
  const phone = document.createElement('p');
  const email = document.createElement('p');
  img.setAttribute("src", "../src/images/test.jpg");
  head.innerHTML = 'Would you like to book a table?';
  text.innerHTML = 'You can reach out to us!';
  phone.innerHTML = 'tel. : 1234567890';
  email.innerHTML = 'email : breakfast@brunch.egg';
  contentdiv.append(head);
  contentdiv.append(text);
  contentdiv.append(phone);
  contentdiv.append(email);

}

export default contactpage;
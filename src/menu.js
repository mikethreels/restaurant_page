const menupage = () => {
  console.log('running menupage')
  const contentdiv = document.getElementById('content');
  while (contentdiv.firstChild) {
    contentdiv.removeChild(contentdiv.firstChild);
  }
  contentdiv.className = "";
  contentdiv.classList.add('menu');
  const img = document.createElement('img');
  const head = document.createElement('h1');
  img.setAttribute("src", "../src/images/test.jpg");
  head.innerHTML = 'Take a look at our menu';

  contentdiv.append(head);
  

  const createChapter = (header, item, numitems, price) => {
    console.log('create chapter')
    const chapterhead = document.createElement('h2');
    const ul = document.createElement('ul');
    
    chapterhead.innerHTML = header;
    for (let i = 0; i < numitems; i++) {
      (function() {
        const li = document.createElement('li');
        const menuitem = document.createElement('p');
        const itemprice = document.createElement('p');
        menuitem.innerHTML = item;
        itemprice.innerHTML = price;
        li.append(menuitem);
        li.append(itemprice);
        ul.append(li);
      })()
    }
    contentdiv.append(chapterhead);
    contentdiv.append(ul);
  }

  createChapter('Breakfast', 'Croissant', 15, '5 Euro')
  createChapter('Brunch', 'Baquette', 10, '10 Euro')
  createChapter('Drinks', 'Coffee', 5, '3 Euro')

}

export default menupage;
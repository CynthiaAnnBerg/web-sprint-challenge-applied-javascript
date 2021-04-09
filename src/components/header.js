const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
title.appendChild(header);
date.appendChild(date);
temp.appendChild(temp);

title.classList.add('title');
date.classList.add('date');
temp.classList.add('temp');

title.textContent = title;
date.textContent = date;
temp.textContent = temp;

}
// TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

const headerAppender = (selector) => {
  expect(document.querySelector('.header>h1')).toBeTruthy()
  expect(document.querySelector('.header>.date')).toBeTruthy()
  expect(document.querySelector('.header>.temp')).toBeTruthy()
  title.header (title, date, temp)
  title.headerAppender(header);
  console.log(headerAppender);
}

header.addEventListener('click', function (event){
  console.log('using the event listener');
});

return header;

export { Header, headerAppender }

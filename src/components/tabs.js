const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //


javascript.appendChild(javascript);
bootstrap.appendChild(bootstrap);
technology.appendChild(technology);

javascript.classList.add('javascript');
bootstrap.classList.add('bootstrap');
technology.classList.add('technology');

javascript.textContent = javascript;
bootstrap.textContent = bootstrap;
technology.textContent = technology;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  a.href = "https://lambda-times-api.herokuapp.com/topics";
  //{"topics":["javascript","bootstrap","technology","jquery","node.js"]}
  tabs = Tabs(['foo', 'bar', 'baz'])
  (queries.getByText(tabs, 'foo'))
  (queries.getByText(tabs, 'bar'))
  (queries.getByText(tabs, 'baz'))
  title.topics (javascript, bootstrap, technology)
  title.tabsAppender(topics);
  console.log(tabsAppender);
}

tabs.addEventListener('click', function (event){
  console.log('using the event listener');
});

return tabsAppender;

export { Tabs, tabsAppender }

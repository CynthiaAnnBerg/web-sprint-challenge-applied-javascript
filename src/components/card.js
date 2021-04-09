const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

headline.appendChild(headLine);
authorPhoto.appendChild(authorPhoto);
authorName.appendChild(authorName);

headLine.classList.add('headLine');
authorPhoto.classList.add('authorPhoto');
authorName.classList.add('authorName');

headLine.textContent = headLine;
authorPhoto.textContent = authorPhoto;
authorName.textContent = authorName;
}

 // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
const cardAppender = (selector) => {
  a.href = "https://lambda-times-api.herokuapp.com/articles";
  title.card (headLine, authorPhoto, authorName)
  title.cardAppender(header);
  console.log(cardAppender);
}

card.addEventListener('click', function (event){
  console.log('using the event listener');
});
return cardAppender;

export { Card, cardAppender }


// {"articles":{"javascript":[{"id":"59b5ea4a-ca4e-4593-b4e6-6728a7dd84c5","headline":"ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects","authorPhoto":"https://tk-assets.lambdaschool.com/08d1372e-e393-47f1-ac44-fcb7d0baf0e2_sir.jpg","authorName":"SIR RUFF'N'STUFF"},{"id":"f74e67cd-293c-4db0-a32b-63e2d6cbb6c2","headline":"Type Coercion: Why Does NaN !== NaN? and Other Strange Occurrences","authorPhoto":"https://tk-assets.lambdaschool.com/a9471235-ed71-4b11-ae15-5a4fa1151d30_bones.jpg","authorName":"BONES R. LIFE"},{"id":"976a1602-c5f5-4def-a712-d9e864a88fc5","headline":"When to Rest, When to Spread: Why There Are Two Meanings Behind '...'","authorPhoto":"https://tk-assets.lambdaschool.com/44260ce3-c8f0-4db8-bc1d-9877662fdf96_puppers.jpg","authorName":"PUPPER S. DOGGO"},{"id":"56bcdbfa-dad5-451a-a4c4-d4698ce73526","headline":"Typescript: Ten Things you Should Know Before Building Your Next Angular Application","authorPhoto":"https://tk-assets.lambdaschool.com/08d1372e-e393-47f1-ac44-fcb7d0baf0e2_sir.jpg","authorName":"SIR RUFF'N'STUFF"}],"bootstrap":[{"id":"0f216c4a-2104-4339-b62f-91d1d16063c7","headline":"Bootstrap 5: Get a Sneak Peak at all the New Features","authorPhoto":"https://tk-assets.lambdaschool.com/1891c758-b3f4-4ec7-9d88-590bf7c7ceb2_fido.jpg","authorName":"FIDO WALKSALOT"},{"id":"551dd7bb-f462-407d-a7b2-b90092508cc9","headline":"UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)","authorPhoto":"https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg","authorName":"MAX GOODBOYE"},{"id":"75eae100-687c-4269-bc90-73feed82dbf5","headline":"The Hottest New Bootstrap 4 Components Every Developer Needs to Know About","authorPhoto":"https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg","authorName":"MAX GOODBOYE"}],"technology":[{"id":"55fbf69f-c966-4dd4-af87-4257776fcbac","headline":"AI: What Are the Ethical Ramifications of the Future?","authorPhoto":"https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg","authorName":"MAX GOODBOYE"},{"id":"4b837d32-e56c-42cb-af9e-f37b5e562f01","headline":"AR or VR: How We Will See the World Through a Digital Lense","authorPhoto":"https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg","authorName":"MAX GOODBOYE"},{"id":"e8677423-1cbc-4a34-8c8b-1dfabf4ae1eb","headline":"Quantum Computing: Where we Are Now, and Where We Will Be Very Soon","authorPhoto":"https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg","authorName":"MAX GOODBOYE"}],"jquery":[{"id":"018438c4-0281-4a59-af96-926844f9604b","headline":"History of Javascript Libraries: from jQuery to React","authorPhoto":"https://tk-assets.lambdaschool.com/44260ce3-c8f0-4db8-bc1d-9877662fdf96_puppers.jpg","authorName":"PUPPER S. DOGGO"},{"id":"daf46a9a-b24a-4a1e-8370-de155cf5ead0","headline":"jQuery Animations: When and Where to Use Them, and Not CSS","authorPhoto":"https://tk-assets.lambdaschool.com/1891c758-b3f4-4ec7-9d88-590bf7c7ceb2_fido.jpg","authorName":"FIDO WALKSALOT"},{"id":"10800136-1aa3-4b95-83a4-f668cf59dee2","headline":"Why I Use jQuery in Every Application I Create and Why You Should Too","authorPhoto":"https://tk-assets.lambdaschool.com/1891c758-b3f4-4ec7-9d88-590bf7c7ceb2_fido.jpg","authorName":"FIDO WALKSALOT"}],"node":[{"id":"0b7d2eb3-14e3-4b54-bfb5-db7778325928","headline":"Node.js in 2018: Which Framework? Express, Sails, Hapi?","authorPhoto":"https://tk-assets.lambdaschool.com/08d1372e-e393-47f1-ac44-fcb7d0baf0e2_sir.jpg","authorName":"SIR RUFF'N'STUF"},{"id":"7173411d-eee0-4d81-93f6-c48d706ad058","headline":"MongoDB: NoSQL vs. SQL, the Debate Continues..","authorPhoto":"https://tk-assets.lambdaschool.com/a9471235-ed71-4b11-ae15-5a4fa1151d30_bones.jpg","authorName":"BONES R. LIFE"}]}}
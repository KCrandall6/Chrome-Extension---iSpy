// *** TO DO ***
// - egg does not change size when mouse is over
// - egg still not completely on page
//     - need to change to window.innerWidth


const body = document.querySelector('body');
const surprise = document.createElement('img');
const imageURL = chrome.runtime.getURL('images/realEgg.png');
surprise.src = imageURL;
surprise.setAttribute('id', 'surprise');

surprise.style.opacity = 0.3;
surprise.style.height = '75px';
surprise.style.width = '55px';

const randomPosition = (variable) => {
  // if (Math.random() > 0.5) {
  //   return `${Math.random() * variable}px`;
  // } else {
  //   return `${Math.random() * variable * -1}px`;
  // }
  return `${Math.random() * variable}px`
};
surprise.style.position = 'absolute';
// surprise.style.left = randomPosition(screen.width);
// surprise.style.top = randomPosition(screen.height);

surprise.style.left = randomPosition(window.innerWidth - 100);
surprise.style.top = randomPosition(window.innerHeight - 100);

// surprise.style.left = '0px';
// surprise.style.top = '0px';

console.log(surprise.style.left);
console.log(surprise.style.top);

surprise.addEventListener('click', () => {
  surprise.style.opacity = 1;
  surprise.style.height = '500px';
  surprise.style.width = '375px';
});

body.appendChild(surprise);
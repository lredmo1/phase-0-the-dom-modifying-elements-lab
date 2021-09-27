main.remove();
let newHeader = document.createElement('h1');
newHeader.id = 'victory';
let newBody = document.querySelector('body');
newBody.innerHTML = newHeader;
let yourName = 'Lisa';
newHeader.textContent = `${yourName} is the champion`;

console.log('bobbyhadz.com');

const child = document.getElementById('child');

const parentWithClass = child.closest('.parent');

console.log(parentWithClass); // 👉️ div.parent

let obj = document.childNodes;
let len = obj.length;

for (let i = 0; i < len; i++) {
  console.log(obj[i].childNodes);
}

btn = document.getElementById('btn-alert');
btn.addEventListener('click', (e) => {
  alert('Hello belleblazer4life......\nYou clicked me!');
});

function toggleMenu(){
let x = document.getElementById('listContainer');
const bar = document.querySelector('.toggleMenu');
if(x.className === 'listContainer'){
x.className += ' responsive';
bar.innerHTML = `<a href="colAbout.html" class="remDiv">x</a>`;
}
else{
x.className === 'listContainer';
}
}


const darkmodeButton = document.getElementById('darkmode');
const body = document.body;

if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark-mode');
  darkmodeButton.classList.add('dark-mode');
}

darkmodeButton.addEventListener('click', () => {
  console.log('Button clicked!');
  body.classList.toggle('dark-mode');
  darkmodeButton.classList.toggle('dark-mode');


  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});
  overlay=document.getElementById("overlay");
  overlay.classList.add("active");
  setTimeout(() => {
    
  })
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("overlay").style.animation = "moveout 0.5s forwards";
});
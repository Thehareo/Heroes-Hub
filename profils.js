const darkmodeButton = document.getElementById('darkmode');
const body = document.body;

// Check if dark mode is already enabled
if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark-mode');
  darkmodeButton.classList.add('dark-mode');
}

darkmodeButton.addEventListener('click', () => {
  console.log('Button clicked!');
  body.classList.toggle('dark-mode');
  darkmodeButton.classList.toggle('dark-mode');

  // Store the dark mode state in local storage
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

 
profile1.addEventListener('click', () => {
  
  const overlay = document.createElement('div');
  overlay.id = 'overlay';
  
  const image = document.createElement('img');
  image.src = 'bat.png';
  
  overlay.appendChild(image);
  
  document.body.appendChild(overlay);
  
  overlay.classList.add('show');
  
  // ... rest of the code ...

// ... rest of the code ...
  overlay.classList.add('show');



      
      

      setTimeout(() => {
          window.location.href = 'batman.html';
      }, 500);
  });

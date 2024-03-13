const toggleBtn = document.getElementById('toggleBtn');
const menu = document.getElementById('menu');

toggleBtn.addEventListener('click', function() {
  toggleMenu();
});

document.addEventListener('click', function(event) {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickInsideToggleBtn = toggleBtn.contains(event.target);
  
  if (!isClickInsideMenu && !isClickInsideToggleBtn) {
    menu.style.display = 'none';
  }
});

function toggleMenu() {
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
}

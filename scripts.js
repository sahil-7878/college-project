document.getElementById('menu-icon').addEventListener('click', function() {
  const navbar = document.getElementById('navbar');
  const menuIcon = document.querySelector('.menu-icon .fa-bars');
  const closeIcon = document.querySelector('.menu-icon .fa-times');
  
  navbar.classList.toggle('show');
  menuIcon.style.display = navbar.classList.contains('show') ? 'none' : 'block';
  closeIcon.style.display = navbar.classList.contains('show') ? 'block' : 'none';
});

document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    const menuIcon = document.querySelector('.menu-icon .fa-bars');
    const closeIcon = document.querySelector('.menu-icon .fa-times');

    navbar.classList.remove('show');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  });
});

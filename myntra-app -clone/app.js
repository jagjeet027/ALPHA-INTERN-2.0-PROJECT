const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.querySelector('.sub-menu').style.display = 'flex';
  });

  item.addEventListener('mouseout', () => {
    item.querySelector('.sub-menu').style.display = 'none';
  });
});
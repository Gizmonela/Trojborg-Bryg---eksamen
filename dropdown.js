document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(function(dropdown) {
      dropdown.addEventListener('click', function() {
        this.classList.toggle('active');
        var submenu = this.querySelector('.submenu');
        submenu.style.display = (submenu.style.display === 'block' ? 'none' : 'block');
      });
    });
  
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.dropdown')) {
        dropdowns.forEach(function(dropdown) {
          dropdown.classList.remove('active');
          dropdown.querySelector('.submenu').style.display = 'none';
        });
      }
    });
  });
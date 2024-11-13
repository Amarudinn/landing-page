//Navbar
document.getElementById("menu-toggle").addEventListener("click", function() {
    const navbar = document.getElementById("navbar-sticky");
    navbar.classList.toggle("hidden");
  });

  //GetStarted
  const getStartedButton = document.querySelector('.bg-blue-700');
  const loginForm = document.getElementById('loginForm');
  getStartedButton.addEventListener('click', () => {
    loginForm.classList.toggle('hidden');
  });

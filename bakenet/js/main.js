// document.addEventListener('DOMContentLoaded', () => {
//   const menuButton = document.getElementById('mobile-menu-button');
//   const mobileMenu = document.getElementById('mobile-menu');

//   if (menuButton && mobileMenu) {
//     menuButton.addEventListener('click', () => {
//       mobileMenu.classList.toggle('hidden');
//     });
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('pink-nav-menu-button');
  const mobileMenu = document.getElementById('pink-nav-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      // Ensure that when the menu is shown, it uses flex display
      // and when hidden, it respects the md:flex for desktop.
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('flex'); 
      } else {
        // When hidden, Tailwind's 'hidden' takes precedence over 'flex',
        // and 'md:flex' will apply on medium screens and up.
        // No need to remove 'flex' explicitly here as 'hidden' handles it.
      }
    });
  }
});

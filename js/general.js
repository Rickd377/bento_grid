const toggleButton = document.getElementById('theme-toggle');
const icon = toggleButton.querySelector('i');
const elementsToTransition = [
  document.body,
  document.querySelector('.container'),
  document.querySelector('.subcontainer'),
  ...document.querySelectorAll('[class^="block-"]'),
  icon
];

function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun-bright');
  } else {
    document.documentElement.removeAttribute('data-theme');
    icon.classList.remove('fa-sun-bright');
    icon.classList.add('fa-moon');
  }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  applyTheme(savedTheme);
}

toggleButton.addEventListener('click', () => {
  elementsToTransition.forEach(element => element.classList.add('transition'));
  const isLightTheme = document.documentElement.hasAttribute('data-theme');
  if (isLightTheme) {
    applyTheme('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    applyTheme('light');
    localStorage.setItem('theme', 'light');
  }
  setTimeout(() => {
    elementsToTransition.forEach(element => element.classList.remove('transition'));
  }, 400); // Match transition duration
});
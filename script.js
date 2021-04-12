const { body } = document;

// Check localstorage if there is bgTheme
if (localStorage.getItem('bgTheme')) {
  body.classList.add(localStorage.getItem('bgTheme'));
}

function changeBackground(number) {
  // Check if background showing
  let prevBackground;
  if (body.className) {
    prevBackground = body.className;
  }

  // Reset CSS class for body.
  body.className = '';
  localStorage.removeItem('bgTheme');

  if (!(prevBackground === `background-${number}`)) {
    body.classList.add(`background-${number}`);
    localStorage.setItem('bgTheme', `background-${number}`);
  }
}

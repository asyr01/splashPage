const { body } = document;

function changeBackground(number) {
  // Check if background showing
  let prevBackground;
  if (body.className) {
    prevBackground = body.className;
  }
  // Reset CSS class for body.
  body.className = '';
  if (!(prevBackground === `background-${number}`)) {
    body.classList.add(`background-${number}`);
  }
}

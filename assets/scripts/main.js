(() => {
  "use strict";
  const form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (event.target.elements.email) {
      alert(`O e-mail inserido foi: ${event.target.elements.email.value}`);
      event.target.elements.email.value = '';
    }
  }, false)
})()
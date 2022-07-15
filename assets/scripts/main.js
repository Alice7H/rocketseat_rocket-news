(() => {
  "use strict";
  const form = document.querySelector('form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (event.target.elements.email) {
      const data = await apiCallToPostEmail(event.target.elements.email.value);

      alert(`O usuário com o email ${JSON.stringify(data.email)} foi cadastrado`);
      event.target.elements.email.value = '';
    }
  }, false)

  function apiCallToPostEmail(email) {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then(response => response.json())
      .then(data => data)
      .catch(error => error);
  }
})();
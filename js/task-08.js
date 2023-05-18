const loginFormEl = document.querySelector('.login-form');

const inputForms = (event) => {
    event.preventDefault();

    const emailInput = loginFormEl.elements.email;
    const passwordInput = loginFormEl.elements.password;

    if (emailInput.value === '' || passwordInput.value === '') {
      alert('Всі поля повинні бути заповнені!!!');
    } else {
      const formData = {
        email: emailInput.value,
        password: passwordInput.value
      };

      console.log(formData);

      loginFormEl.reset();
    }
  };



  loginFormEl.addEventListener('submit', inputForms);

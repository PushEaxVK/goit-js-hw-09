const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');

form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;

  localStorage.setItem('form-data', JSON.stringify(formData));
  console.log(localStorage);
});

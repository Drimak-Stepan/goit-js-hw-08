import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

const STORAGE_KEY = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

populateText();

const onInput = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

refs.form.addEventListener('input', throttle(onInput, 500));

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  e.target.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
});

function populateText() {
  const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedText) {
    refs.form.email.value = savedText.email || '';
    refs.form.message.value = savedText.message || '';
  }
}

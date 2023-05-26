import throttle from 'lodash.throttle';
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const saveStateToLocalStorage = throttle(() => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}, 500);

emailInput.addEventListener('input', saveStateToLocalStorage);
messageInput.addEventListener('input', saveStateToLocalStorage);
window.addEventListener('load', () => {
  const storedState = localStorage.getItem('feedback-form-state');
  if (storedState) {
    const { email, message } = JSON.parse(storedState);
    emailInput.value = email;
    messageInput.value = message;
  }
});
const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log('Feedback form submitted:', state);

  localStorage.removeItem('feedback-form-state');

  emailInput.value = '';
  messageInput.value = '';
});

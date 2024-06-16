import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

console.log(form);

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  console.log('EVENT!!');
  console.log(event);
  const formData = new FormData(form);
  const delay = formData.get('delay');
  const state = formData.get('state');
  
  createPromise(delay, state)
    .then(() =>
      iziToast.success({
        title: 'resolve',
        message: delay + ' ms',
      })
    )
    .catch(() =>
      iziToast.error({
        title: '❌  reject',
        message: delay + ' ms',
        icon: `❌`,
        iconColor: 'red',
      })
    );
}

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state == 'fulfilled') {
        console.log('resolve');

        resolve('delay');
      } else {
        console.log('reject');
        reject(delay);
      }
    }, delay);
  });
  
};
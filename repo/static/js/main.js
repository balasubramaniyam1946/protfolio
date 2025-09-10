const sendBtn = document.getElementById('sendBtn');
const formStatus = document.getElementById('formStatus');

sendBtn.addEventListener('click', () => {
  formStatus.innerText = "This is a static site — form not connected.";
});

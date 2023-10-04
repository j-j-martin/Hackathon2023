function autoFillTextField() {
  const textField = document.getElementsByName('enrolpassword');
  const predefinedText = 'get (user_id course_id)';

  if (textField) {
    textField.forEach((textField) => {
      textField.value = predefinedText;
    });
  }
}
window.addEventListener('load', autoFillTextField);

function autoFillTextField() {
  const textField = document.getElementsByName('enrolpassword');
  const predefinedText = 'get (user_id course_id)';
  console.log(textField);

  textField.forEach((textField) => {
    textField.value = predefinedText;
  });
}

window.addEventListener('load', autoFillTextField);

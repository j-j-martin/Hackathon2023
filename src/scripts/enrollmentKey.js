function autoFillTextField() {
  const textField = document.getElementById('enrolpassword_5270'); // Ersetzen Sie durch die ID des Textfelds
  const predefinedText = 'get (user_id course_id)'; // Ersetzen Sie durch den vordefinierten Text

  if (textField) {
    textField.value = predefinedText;
  }
}

window.addEventListener('load', autoFillTextField);

// Funktion zum Speichern des vordefinierten Texts im Web Storage und Aktualisieren des Anzeige-Elements
function savePredefinedText() {
  const inputField = document.getElementById('enrollmentkeyinput'); // ID des Eingabefelds in index.html
  console.log(predefinedText);

  if (inputField) {
    const predefinedText = inputField.value;
    localStorage.setItem('predefinedText', predefinedText);

    // Aktualisieren des Anzeige-Elements
    const displayElement = document.getElementById('displayPredefinedText');
    if (displayElement) {
      displayElement.innerText = `Gespeicherter Text: ${predefinedText}`;
    }
  }
}

// Funktion zum automatischen Ausfüllen des Textfelds
function autoFillTextField() {
  const textField = document.getElementsByName('enrolpasswords'); // Ersetzen Sie durch die ID des Textfelds
  const predefinedText = 'TEST'; /* localStorage.getItem('predefinedText') */

  if (textField && predefinedText) {
    textField.forEach((textField) => {
      textField.value = predefinedText;
    });
  }
}

// Aufrufen der Funktionen
window.addEventListener('load', autoFillTextField);

// Event-Handler direkt zuweisen
const saveButton = document.getElementById('saveButton'); // ID des Speichern-Buttons in index.html
if (saveButton) {
  saveButton.onclick = () => {
    savePredefinedText();
  };
}

function expenceInput(expenceId) {
    const Input = document.getElementById(expenceId);
    const InputString = Input.value;
    const InputNumber = parseInt(InputString);
    Input.value = "";
    return InputNumber;
}
function expenceInputInnerText(expenceId) {
    const Input = document.getElementById(expenceId);
    const InputString = Input.innerText;
    const InputNumber = parseInt(InputString);
    Input.value = "";
    return InputNumber;
}
function setProperty(setId, value) {
    const expenceElement = document.getElementById(setId);
    expenceElement.innerText = value;
    return expenceElement;
}

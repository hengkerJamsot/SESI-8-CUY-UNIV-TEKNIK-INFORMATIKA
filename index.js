let passwordLength = document.getElementById('passwordLength');
let password = document.getElementById('password');
let saveButton = document.getElementById('saveButton');

function generatePassword(len) {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const uppperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "123456789";
    const symbol = "!@#$%^&*()_-+=~{}[]<>?/";

    const data = lowerCase + uppperCase + numeric + symbol;
    let generator = '';
    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)];
    }
    return generator;
}

function getPassword() {
    const newPassword = generatePassword(passwordLength.value);
    password.value = newPassword;
    setTimeout(() => {
        alert('password has been generated');

    }, 1000)

}

function savePassword() {
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${password.value}`));
    saveButton.setAttribute('download', 'MyPasswordGeneratorLOG.txt');
    setTimeout(() => {
        alert('berhasil disimpan');
    }, 1000)

}





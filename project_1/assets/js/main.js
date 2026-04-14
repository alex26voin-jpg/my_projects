const buttonEl = document.querySelector('.addButton');
buttonEl.addEventListener('click', function (event) {
    event.preventDefault ()

    const password = 'qwerty'
    let confirmPassword = prompt ('Введите пароль')

    if (confirmPassword.trim () === '') {
        alert ('Пустое поле')
    } else if (password === confirmPassword) {
        alert ('Пароль верный')
    } else {
        alert('Пароль неверный');
    }
});
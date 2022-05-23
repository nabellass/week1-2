function randomInput () {
    let getValue = getInput.value;
    if (getValue%3===0) {
        document.getElementById('output').innerHTML = 'Fizz!';
    } else if (getValue%5===0) {
        document.getElementById('output').innerHTML = 'Buzz!';
    } else if (getValue === getValue) {
        gettext = 'Fizz!';
        document.getElementById('output').innerHTML = getValue;
    } else {
        document.getElementById('output').innerHTML = 'invalid input';
    }
};

function showDogs(responseJson) {
    let arr = [];
    for (let i = 0; i < responseJson.message.length; i++) {
        arr.push('<img src="'+ responseJson.message[i] + '" width="200px">')
    }
    $('div').html(arr.join());
}

function getDogs(dogNum) {
    fetch('https://dog.ceo/api/breeds/image/random/'+dogNum)
    .then(response => response.json())
    .then(responseJson => showDogs(responseJson));
}

function watchForm() {
    $('form').on('click', 'button', event => {
        event.preventDefault();
        let dogNum = $('input').val();
        if (dogNum <= 50 && dogNum > 0) {
            getDogs(dogNum);
        }
    });
}

$(function() {
    watchForm();

});
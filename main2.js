
function displayResults(responseJson) {
    let arr = [];

    for (let i = 0; i < responseJson.message.length; i++) {
        arr.push('<img src="'+ responseJson.message[i] + '" class="results-img" width="200px">');
    }

    $('.results-img').remove();
    $('div').append(arr.join(''));
    $('.results').removeClass('hidden');
}

function getDogs(dogNum) {
    fetch('https://dog.ceo/api/breeds/image/random/'+dogNum)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
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
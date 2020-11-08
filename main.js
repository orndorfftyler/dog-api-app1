
function showDogs(responseJson) {
    console.log(responseJson);
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
        if (dogNum <= 50) {
            getDogs(dogNum);
        }
    });
}


$(function() {
    watchForm();

});
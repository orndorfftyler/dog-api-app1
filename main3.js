
function showDogs(responseJson) {
    $('div').html('<img src="'+ responseJson.message + '" width="200px">');
}

function tryAgain() {
    $('div').html('<p>Breed not found! Try another</p>');
}

function getDogs(dogBreed) {
    fetch('https://dog.ceo/api/breed/'+ dogBreed + '/images/random')
    .then(function(response) {
        if (response.ok) {
            return response.json();
        } 
    }) 
    .then(responseJson => showDogs(responseJson))
    .catch(error => alert('Try a different breed.'));
}

function watchForm() {
    $('form').on('click', 'button', event => {
        event.preventDefault();
        let dogBreed = $('input').val();
            getDogs(dogBreed);
    });
}


$(function() {
    watchForm();

});
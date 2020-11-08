
function showDogs(responseJson) {
    //console.log(responseJson);
    
    $('div').html('<img src="'+ responseJson.message + '" width="200px">');
}


function getDogs(dogBreed) {
    fetch('https://dog.ceo/api/breed/'+ dogBreed + '/images/random')
    .then(response => response.json())
    .then(responseJson => showDogs(responseJson))
    .catch(error => alert('Breed not found! Try another'));
}

function watchForm() {
    $('form').on('click', 'button', event => {
        event.preventDefault();
        let dogBreed = $('input').val();
        //console.log(dogNum);
            getDogs(dogBreed);
    });
}


$(function() {
    watchForm();

});
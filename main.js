
function showDogs(responseJson) {
    console.log(responseJson);
}


function getDogs(dogNum) {
    //console.log('https://dog.ceo/api/breeds/image/random/'+dogNum);
    fetch('https://dog.ceo/api/breeds/image/random/'+dogNum)
    .then(response => response.json())
    .then(responseJson => showDogs(responseJson))
    .catch(error => alert('Dogs are lost! Come back later'));
}

function watchForm() {
    $('form').on('click', 'button', event => {
        event.preventDefault();
        let dogNum = $('input').val();
        //console.log(dogNum);
        if (dogNum <= 50) {
            getDogs(dogNum);
        }
    });
}


$(function() {
    watchForm();

});
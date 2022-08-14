
function sendMessage() {

    let name = document.querySelector('#name');
    let phone = document.querySelector('#phone');
    let email = document.querySelector('#email');
    let message = document.querySelector('#message');

    if (name.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
}
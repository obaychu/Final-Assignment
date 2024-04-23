console.log('Hello World')
document.getElementById("year").innerHTML = new Date().getFullYear();


const button = document.getElementById('btn-alert');
 
 
button.addEventListener('mouseover', function() {
    // Change the button label on mouseover
    button.innerText = 'See you next time';
});
 
 
button.addEventListener('mouseleave', function() {
    // Revert the button label when not hover
    button.innerText = 'Thanks for stopping by';
});


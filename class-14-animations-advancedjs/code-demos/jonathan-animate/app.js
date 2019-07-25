var form = document.getElementById('submit-bbq');
var firstContent = document.getElementById('first-content');
var secondContent = document.getElementById('second-content');

function handleSubmit(event){
  event.preventDefault();
  firstContent.classList.add('animate-right');
}

form.addEventListener('submit', handleSubmit);

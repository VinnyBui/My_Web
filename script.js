const projects = document.querySelectorAll('.project');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const projectName = document.querySelector('.project-name');


projects.forEach(function(project, index){
  project.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener('click', function(){
  counter++;
  carousel();
})

prevBtn.addEventListener('click', function(){
  counter--;
  carousel();
})

function carousel(){
 
  if(counter === projects.length){
    counter = 0;
  }
  
  if(counter < 0){
    counter = projects.length -1;
  }

  projects.forEach(function(project){
    project.style.transform = `translateX(-${counter * 100}%)`
  })

  if(counter == 0){
    projectName.innerHTML = "Library";
  }
  else if(counter == 1){
    projectName.innerHTML = "Etch-A-Sketch";
  }
  else if(counter == 2){
    projectName.innerHTML = "Rock Paper Scissors";
  }
  else if(counter == 3){
    projectName.innerHTML = "Calculator";
  }
}

//Contact Email
nameT = document.getElementById("name");
email = document.getElementById("email");
msg = document.getElementById("message");

function sendEmail(){
  Email.send({
    SecureToken: "4e3695c8-5e82-4148-9121-ddb2e941ccf5",
    To : 'vinh.bui0101@gmail.com',
    From : email.value,
    Subject : "New Contact Form Enquiry",
    Body : "Name: " + nameT.value
          + "<br> Email: " + email.value
          + "<br> Message: " + msg.value
}).then(
  message => alert("Message Sent!")
);
}
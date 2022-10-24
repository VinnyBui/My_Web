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
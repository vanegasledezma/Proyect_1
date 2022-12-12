
const progress = (value) => {
    document.getElementsByClassName('progress-bar')[0].style.width = `${value}%`;
 }
 
    let step = document.getElementsByClassName('step');
    let botonAnterior = document.getElementById('botonAnterior');
    let botonSiguiente = document.getElementById('botonSiguiente');
    let botonFinalizar = document.getElementById('botonFinalizar');
    let form = document.getElementsByTagName('form')[0];
    let preloader = document.getElementById('preloader-wrapper');
    let bodyElement = document.querySelector('body');
    let succcessDiv = document.getElementById('success');
  
    form.onsubmit = () => { return false }
 
    let current_step = 0;
    let stepCount = 6
    step[current_step].classList.add('d-block');
    if(current_step == 0){
      botonAnterior.classList.add('d-none');
      botonFinalizar.classList.add('d-none');
      botonSiguiente.classList.add('d-inline-block');
    }
 
 
    botonSiguiente.addEventListener('click', () => {
       current_step++;
       let previous_step = current_step - 1;
       if(( current_step > 0) && (current_step <= stepCount)){
         botonAnterior.classList.remove('d-none');
         botonAnterior.classList.add('d-inline-block');
         step[current_step].classList.remove('d-none');
         step[current_step].classList.add('d-block');
         step[previous_step].classList.remove('d-block');
         step[previous_step].classList.add('d-none');
         if (current_step == stepCount){
            botonFinalizar.classList.remove('d-none');
            botonFinalizar.classList.add('d-inline-block');
            botonSiguiente.classList.remove('d-inline-block');
            botonSiguiente.classList.add('d-none');
         }
       } else {
         if(current_step > stepCount){
             form.onsubmit = () => { return true }
         }
       }
     progress((100 / stepCount) * current_step);
     });
 
 
     botonAnterior.addEventListener('click', () => {
      if(current_step > 0){
         current_step--;
         let previous_step = current_step + 1; 
         botonAnterior.classList.add('d-none');
         botonAnterior.classList.add('d-inline-block');
         step[current_step].classList.remove('d-none');
         step[current_step].classList.add('d-block')
         step[previous_step].classList.remove('d-block');
         step[previous_step].classList.add('d-none');
         if(current_step < stepCount){
            botonFinalizar.classList.remove('d-inline-block');
            botonFinalizar.classList.add('d-none');
            botonSiguiente.classList.remove('d-none');
            botonSiguiente.classList.add('d-inline-block');
            botonAnterior.classList.remove('d-none');
            botonAnterior.classList.add('d-inline-block');
         } 
      }
 
      if(current_step == 0){
         botonAnterior.classList.remove('d-inline-block');
         botonAnterior.classList.add('d-none');
      }
     progress((100 / stepCount) * current_step);
    });
 
 
    botonFinalizar.addEventListener('click', () => {
     preloader.classList.add('d-block');
 
     const timer = ms => new Promise(res => setTimeout(res, ms));
 
     timer(1000)
       .then(() => {
            bodyElement.classList.add('loaded');
       }).then(() =>{
           step[stepCount].classList.remove('d-block');
           step[stepCount].classList.add('d-none');
           botonAnterior.classList.remove('d-inline-block');
           botonAnterior.classList.add('d-none');
           botonFinalizar.classList.remove('d-inline-block');
           botonFinalizar.classList.add('d-none');
           succcessDiv.classList.remove('d-none');
           succcessDiv.classList.add('d-block');
       })
       
 });

 
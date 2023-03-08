let text="УГАДАЙ ЧИСЛО...";
let i=0;
let speed=150;
function type(){
    if(i<text.length){
        document.querySelector("#par").textContent+=text.charAt(i);
        i++;
        setTimeout(type,speed);
    }
}
type();




const buttonTwo = document.querySelector("#myButton");
const audio=document.querySelector("#myAudio");
buttonTwo.addEventListener("click", function() {
if(audio.paused){
    audio.play();
}
else{
    audio.pause(); 
}
})



const input=document.querySelector("#guess");
const button=document.querySelector("#btn");
const answer=Math.floor(Math.random()*20)+1;
 button.addEventListener("click",play);
 input.addEventListener("keypress",function(e){
   if(e.keyCode===13){
     play();
   }
 })
function play(){
  const userNumber=document.querySelector("#guess").value;
  if (userNumber<1||userNumber>20){
    Swal.fire({
      icon: 'error',
      title: 'Ой...',
      text: 'Введи число от 1 до 20!',
      
    })
  }

  else if(isNaN(userNumber)){
    Swal.fire({
      icon: 'error',
      title: 'Ой...',
      text: 'Нужно ввести число!',
      
    })
  }
else{
  if(userNumber<answer){
    Swal.fire('НЕ УГАДАЛ...',' Попробуй число повыше!')
   
  }
 else if(userNumber>answer){
  Swal.fire('НЕ УГАДАЛ...', 'Попробуй число пониже!')
  }
  else{
 
const audio=document.querySelector("#myAudio"); 
document.querySelector("#myAudio").play(); 

    Swal.fire({
      title: 'ПОБЕДА!  Вы угадали!!!  ',
      imageUrl: 'https://images.unsplash.com/photo-1624231481279-26510afb2f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHx2aWN0b3J5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: 'ВЫ ПОБЕДИЛИ!!!',
    })
  }
}

}


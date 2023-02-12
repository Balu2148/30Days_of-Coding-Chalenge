let switchCtn = document.querySelector("#switch-cnt");
let myswitch1 = document.querySelector("#switch-c1");
let myswitch2 = document.querySelector("#switch-c2");
let switchCiricle = document.querySelectorAll('.switch_circle');
let switchbtn = document.querySelectorAll(".switch-btn");
let bcontainer =document.querySelectorAll('#b-conatiner');
let ccontainer =document.querySelectorAll('#c-conatiner');
const allButtons = document.querySelectorAll('.submit');

 let getButtons =(e) => e.preventDefault();

 let changeForm =(e) => {
    switchCtn.classList.add('is-ba');
    setTimeout(function (){
        switchbtn.classList.remove('is-ba');
    }, 1500);

    myswitch.classList.toggle('is-bar');
    switchCiricle[0].classList.toggle('is-bar');
    switchCiricle[1].classList.toggle('is-bar');

    myswitchc1.classList.toggle('hidden');
    myswitchc2.classList.toggle('hidden');
    bcontainer.classList.toggle('is-br');
    ccontainer.classList.toggle('is-br');
    ccontainer.classList.toggle('is-z200')

    

 }
let main = (e) => {
    for(var i = 0; i < allButtons.length; i++) allButtons[i].addEventListener('click',getButtons);
    for(var i = 0; i<switchbtn.length; i++) switchbtn[i].addEventListener('click', changeForm);
};
window.addEventListener('load',main)
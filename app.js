

const hamburger=document.querySelector('.header .nav .hamburger');
const mobile_menu=document.querySelector('.header .nav ul');
const header=document.querySelector('.header');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scroll_position=window.scrollY;
    if (scroll_position > 50){
        header.style.backgroundColor='#212121';
    }
    else{
        header.style.backgroundColor='transparent';
    }
    });

window.addEventListener('click', function(e){   
  let box=document.getElementById('project1');
  let box1=document.getElementById('over1');
  if (box.contains(e.target)){
    box1.classList.toggle('active');
  } else{
    box1.classList.remove('active');
  }
});
window.addEventListener('click', function(e){   
  let box=document.getElementById('project2');
  let box1=document.getElementById('over2');
  if (box.contains(e.target)){
    box1.classList.toggle('active');
  } else{
    box1.classList.remove('active');
  }
});
window.addEventListener('click', function(e){   
  let box=document.getElementById('project3');
  let box1=document.getElementById('over3');
  if (box.contains(e.target)){
    box1.classList.toggle('active');
  } else{
    box1.classList.remove('active');
  }
});
window.addEventListener('click', function(e){   
  let box=document.getElementById('project4');
  let box1=document.getElementById('over4');
  if (box.contains(e.target)){
    box1.classList.toggle('active');
  } else{
    box1.classList.remove('active');
  }
});

document.getElementById('load-button').addEventListener('click',()=>{
  let java=document.getElementById('java');
  let js=document.getElementById('js');
  let css=document.getElementById('css');
  let html=document.getElementById('html');
  let react=document.getElementById('react');
  let angular=document.getElementById('angular');
  let vuejs=document.getElementById('vuejs');
  let php=document.getElementById('php');
  let wp=document.getElementById('wp');
  let nodejs=document.getElementById('nodejs');
  java.classList.add('active');
  js.classList.add('active');
  css.classList.add('active');
  html.classList.add('active');
  react.classList.add('active');
  angular.classList.add('active');
  vuejs.classList.add('active');
  php.classList.add('active');
  wp.classList.add('active');
  nodejs.classList.add('active');
  });
window.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("contact-form");
  var status = document.getElementById("confirm");
  function success() {
    form.reset();
    status.classList.add('success')
    status.innerHTML = "Thanks!";
  }
  
  function error() {
    status.innerHTML = "Oops! There was a problem.";
    status.classList.add('error')
  }
  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});
function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}


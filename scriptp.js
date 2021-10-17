const togglebutton=document.getElementsByClassName('navbar-toggle')[0];
const navbarlinks=document.getElementsByClassName('navbar-links');
togglebutton.addEventListener('click',function(){
for(var i=0;i<navbarlinks.length;i++)
navbarlinks[i].classList.toggle('active');
});
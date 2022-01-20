var spinner=document.getElementById("wheel");
 function rot(sec,dg){
    spinner.style.transform = 'rotate('+dg+'deg)';
    spinner.style.transitionDuration=sec+'s';
}
spinner.onclick=function(){
    var nd=Math.floor(Math.random() * 7) + 2;
     var dg=Math.floor(Math.random() * 2600) + 365;
     for(let i=nd;i>1;i--){
         setInterval(rot(i,dg),i*nd);
     }
     
 }

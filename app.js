alert('Welcome in our Website');

function printfavorite()
{
  var faivoretgame=prompt('what do you like more pubg or cod ?');
while ( faivoretgame !=='pubg' && faivoretgame!=='cod' ){
 faivoretgame = prompt('please only answer with pubg or cod');}
var hours=prompt('How many hours do you spend playing your favorite game')
var picturofthegame='';
 if (faivoretgame =='pubg'){

   for( var i=0; i<hours;i++){

    picturofthegame =picturofthegame + '<img src="https://www.91-cdn.com/hub/wp-content/uploads/2021/04/pubg-lite-shut-down-image.jpg"  width="300px">';
      /*document.write('<img src="https://www.91-cdn.com/hub/wp-content/uploads/2021/04/pubg-lite-shut-down-image.jpg"  width="300px">');*/


   }
 }

 else if (faivoretgame =='cod'){

   for( var i=0; i<hours;i++){
picturofthegame = picturofthegame +'<img src="https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/WZ-Season-Three-Announce-TOUT.jpg" width="300px">';
       /*document.write('<img src="https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/WZ-Season-Three-Announce-TOUT.jpg" width="300px">');*/


   }
 }
 return picturofthegame;
}



var freefire=function()
{
  var likefreefire = confirm("Do you like free fire");
if (likefreefire == true) {


  document.write('<img src="https://venturebeat.com/wp-content/uploads/2020/05/Garena-Free-Fire.jpg?w=1200&strip=all" width="300px">');
   document.write('<a href="https://free-fire-battlegrounds.ar.uptodown.com/android/download">download it here for mobile </a>');
  
} else {
 alert('well ... pubg and cod is more Enthusiastic Battlefield games ... Good Luck'); 
}
}
document.write(freefire());
























/*var faivoretgame=prompt('what do you like more pubg or cod ?');
while ( faivoretgame !=='pubg' && faivoretgame!=='cod' ){
 faivoretgame = prompt('please only answer with pubg or cod');}
var hours=prompt('How many hours do you spend playing your favorite game')
 if (faivoretgame =='pubg'){

   for( var i=0; i<hours;i++){

      document.write('<img src="https://www.91-cdn.com/hub/wp-content/uploads/2021/04/pubg-lite-shut-down-image.jpg"  width="300px">');


   }
 }

 else if (faivoretgame =='cod'){

   for( var i=0; i<hours;i++){

       document.write('<img src="https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/WZ-Season-Three-Announce-TOUT.jpg" width="300px">');


   }
 }

 */














/*if(faivoretgame =='pubg'){

  document.write('<img src="https://www.91-cdn.com/hub/wp-content/uploads/2021/04/pubg-lite-shut-down-image.jpg"  width="300px">');

  document.write('<a href="https://www.pubg.com/ar/">download it here </a>');




}else if(faivoretgame == 'cod'){

  document.write('<img src="https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/WZ-Season-Three-Announce-TOUT.jpg" width="300px">');
   document.write('<a href="https://www.callofduty.com/ar/blog/2021/04/Warzone-Season-Three-Overview-Verdansk-84">download it here </a>');

}else{
  document.write('<h3> please only write pubg or cod </h3>');
}



var likefreefire = confirm("Do you like free fire");
if (likefreefire == true) {


  document.write('<img src="https://t3me.com/ar/wp-content/uploads/sites/3/2020/12/FF.jpg" width="300px">');
   document.write('<a href="https://free-fire-battlegrounds.ar.uptodown.com/android/download">download it here for mobile </a>');
  
} else {
 alert('well ... pubg and cod is more Enthusiastic Battlefield games ... Good Luck'); 
}*/
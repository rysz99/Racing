function zegar() 
{
  var czas = new Date();
  
  
  var godzina = czas.getHours();
  if(godzina<10) godzina = "0"+godzina;
  var minuta = czas.getMinutes();
  if(minuta<10) minuta = "0"+minuta;
  var sekunda = czas.getSeconds();
  if(sekunda<10) sekunda = "0"+sekunda;
  var milisekunda = czas.getMilliseconds();
  
  
  document.getElementById("zegar").innerHTML = godzina+":"+minuta+":"+sekunda+":"+milisekunda;  
  
  setTimeout("zegar()",1);
}

var numer = Math.floor(Math.random()*5)+1;

function kraje() 
{
   numer++; if(numer>5) numer=1;
   
   
   /* Am. półn. */
   var pliki = "<img src=\"usa"+numer+".jpeg\" />";
   var pliki2 = "<img src=\"can"+numer+".jpeg\" />";
   
   
   /* Azja */
   var pliki7 = "<img src=\"sin"+numer+".jpeg\" />";
   var pliki8 = "<img src=\"taj"+numer+".jpeg\" />";
   
   
   /* Am. poł. */
   var pliki3 = "<img src=\"ch"+numer+".jpeg\" />";
   var pliki4 = "<img src=\"arg"+numer+".jpeg\" />";
   
   /* Europa */
   var pliki6 = "<img src=\"spain"+numer+".jpeg\" />";
   var pliki5 = "<img src=\"mon"+numer+".jpeg\" />";
   
   
   /* Afryka */
   var pliki10 = "<img src=\"sen"+numer+".jpeg\" />";
   var pliki11 = "<img src=\"rpa"+numer+".jpeg\" />";
   
   var pliki9 = "<img src=\"aus"+numer+".jpeg\" />";
   
   
   document.getElementById("slajder1").innerHTML = pliki;

document.getElementById("slajder2").innerHTML = pliki2;

document.getElementById("slajder3").innerHTML = pliki3; 

document.getElementById("slajder4").innerHTML = pliki4;

document.getElementById("slajder5").innerHTML = pliki5;

document.getElementById("slajder6").innerHTML = pliki6;

document.getElementById("slajder7").innerHTML = pliki7; 

document.getElementById("slajder8").innerHTML = pliki8;

document.getElementById("slajder9").innerHTML = pliki9;

document.getElementById("slajder10").innerHTML = pliki10;

document.getElementById("slajder11").innerHTML = pliki11;   

  


setTimeout("kraje()",5000);
}

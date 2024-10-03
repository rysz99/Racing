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
   var pliki = "<img src=\"../Grafika/USA/"+numer+".jpeg\" />";
   var pliki2 = "<img src=\"../Grafika/Kanada/"+numer+".jpeg\" />";
   
   
   /* Azja */
   var pliki7 = "<img src=\"../Grafika/Singapur/"+numer+".jpeg\" />";
   var pliki8 = "<img src=\"../Grafika/Tajlandia/"+numer+".jpeg\" />";
   
   
   /* Am. poł. */
   var pliki3 = "<img src=\"../Grafika/Chile/"+numer+".jpeg\" />";
   var pliki4 = "<img src=\"../Grafika/Argentyna/"+numer+".jpeg\" />";
   
   /* Europa */
   var pliki6 = "<img src=\"../Grafika/Hiszpania/"+numer+".jpeg\" />";
   var pliki5 = "<img src=\"../Grafika/Monako/"+numer+".jpeg\" />";
   
   
   /* Afryka */
   var pliki10 = "<img src=\"../Grafika/Senegal/"+numer+".jpeg\" />";
   var pliki11 = "<img src=\"../Grafika/RPA/"+numer+".jpeg\" />";
   
   var pliki9 = "<img src=\"../Grafika/Australia/"+numer+".jpeg\" />";
   
   
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
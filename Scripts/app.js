
/* 
Creating an IIFE => Immedaitely Invocked Funcation Expression 

when the app kicks in the IIFE will commance functioning
*/
 let app; 
(function(app){

   function start(){
       console.log(`%c App Initalized`,`font-size: 18px; color:blue; font-weight: bold;`);

        // this an array to store the pictures inside; 
     let pictures=[
        "./Assests/Images/1.jpeg",
        "./Assests/Images/2.jpeg",
        "./Assests/Images/3.jpeg",
        "./Assests/Images/4.jpeg",
        "./Assests/Images/5.jpeg"
       ];
     
       let index=0; 
        function changePic(){
        let imageSource=document.getElementById("pic").src=pictures[index];
        console.log(imageSource);
       
        if(index<(pictures.length-1)){
            index++;
        }else{
            index=0; 
        }
     }
    setInterval(changePic, 2000);
   }
 
   window.addEventListener("load",start);
})(app || (app={}))
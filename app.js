var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

//var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL="https://api.funtranslations.com/translate/valyrian.json"

function getTranslation(input){
      return serverURL +"?" + "text=" + input

}

 
 function errorHandler(error){
    console.log("error occured", error)
    alert("Something wrong with server! Try again after some time.")
 }



 function clickHandler(){
   
   var inputText=txtInput.value; //taking input
  
    
   
   //calling server for processing
   fetch(getTranslation(inputText))
   .then(response => response.json())
   .then(json => {var translatedText=json.contents.translated;
    outputDiv.innerText=translatedText;  //giving output
})
   .catch(errorHandler)
}


 btnTranslate.addEventListener("click", clickHandler)
   
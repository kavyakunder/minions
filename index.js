var btnTranslate=document.querySelector("#btn-translate");
var txtArea=document.querySelector("#txt-area");
var outputTxt=document.querySelector("#output");


var serverURL ="https://api.funtranslations.com/translate/minion.json"

function getChangedURL(originalText)
{
  return serverURL+"?"+"text="+originalText
}

function errorHandler(error){
     console.log("error occured! ", error )
     alert("server is down! try again after some time")
}




function clicking()


{


  var inputTxt=txtArea.value;
  fetch(getChangedURL(inputTxt))
  .then(response=>response.json())
  .then(json=>{
  var translatedText=json.contents.translated;
   outputTxt.innerText=translatedText;
   .catch(errorHandler)

  })

  // outputTxt.innerHTML="sisisidd "+ txtArea.value;

};
btnTranslate.addEventListener("click", clicking);






// function clicking()

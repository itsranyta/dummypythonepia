function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6W4y2xTAuzF":
        Script1();
        break;
      case "6IluI4c1E0q":
        Script2();
        break;
  }
}

function Script1()
{
  if(void 0===window.stencilsetanswers){GetPlayer();let e="https://cluelabs.com/ai/display/answers-init-sl";xhttp=new XMLHttpRequest,xhttp.onreadystatechange=function(){if(4==this.readyState&&200==this.status&&""!=this.responseText){let e=this.responseText,t=document.getElementsByTagName("head")[0],s=document.createElement("script");t.appendChild(s),s.appendChild(document.createTextNode(e)),window.stencilsetanswers=!0}},xhttp.open("GET",e,!0),xhttp.send()}
}

function Script2()
{
  clabsAnswersGetAnswer();
}


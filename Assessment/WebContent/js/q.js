var fetch=function(q){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function()
{
  if (this.readyState == 4 && this.status == 200)
  {
    var myObj = JSON.parse(this.responseText);
	x=q;
    	console.log( myObj[x].question);
    	console.log( myObj[x].choices);
    
    	
    	document.getElementById("demo").innerHTML = myObj[x].question;
    	document.getElementById("opt1").innerHTML = myObj[x].choice1;
    	document.getElementById("opt2").innerHTML = myObj[x].choice2;
    	document.getElementById("opt3").innerHTML = myObj[x].choice3;
    	document.getElementById("opt4").innerHTML = myObj[x].choice4;
    }
};

xmlhttp.open("GET", "js/quiz.json", true);
xmlhttp.send();
}
function setCookie(cname,cvalue,exdays) {
	  var d = new Date();
	  d.setTime(d.getTime() + (exdays*1000));
	  var expires = "expires=" + d.toGMTString();
	  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	  console.log(document.cookie);
	  
	}
	
function getCookie(cname) {
	  var name = cname + "=";
	  var decodedCookie = decodeURIComponent(document.cookie);
	  var ca = decodedCookie.split(';');
	  for(var i = 0; i < ca.length; i++) {
	    var c = ca[i];
	    while (c.charAt(0) == ' ') {
	      c = c.substring(1);
	    }
	    if (c.indexOf(name) == 0) {
	      return c.substring(name.length, c.length);
	    }
	  }
	  return "";
	}
 function checkCookie() {
	  var username=getCookie("username");
	  if (username != "") {
	    alert("Your answer is " + username);
	  } else {
	     username = prompt("Please enter your name:","");
	     if (username != "" && username != null) {
	       setCookie("username", user, 3);
	     }
	  }
	}

function myFunction(q) {
	//var user=document.getElementsByName('option')[0].value;
	var selected;
	var counter=0;
	var opt=document.getElementsByName('option');
	for(i=0;i<opt.length;i++)
		{
			if(opt[i].checked)
				{
				 var y = "opt"+(i+1);
				 
				
				selected=document.getElementById(y).value;
				alert(selected);
				setCookie(q,selected, 30);
				break;	
	         	}
			
		}
    console.log(i);
    console.log(opt.length);
	if(i==opt.length)
		alert("You have not selected any option");
	//  checkCookie();
	  
	}
  
/*function totalScore()
{
	var score = 0;
	
    	
	
	
}*/

	



  

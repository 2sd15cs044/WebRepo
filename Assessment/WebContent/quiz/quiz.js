var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
  
    for(x in myObj)
    	{
     console.log(myObj[x].que);
     console.log(myObj[x].choices);
     
     document.getElementById("demo").innerHTML = myObj[x].que ;
    	}
   document.getElementById("demo").innerHTML = myObj.person.name;
  }
};
xmlhttp.open("GET", "quiz.json", true);
xmlhttp.send();

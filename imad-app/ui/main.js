//Counter Code
var button = document.getElementById("counter");

button.onclick = function(){

  //Create a request object
   var request = new XMLHttpRequest();

  //Capture the response and store it in a variable
  request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE){
        //Take some action
        if(request.status === 200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML= counter.toString();
        }
    }
        //Not done yet
  };

    //Make a request
    request.open('GET','http://localhost:8080/counter',true);
    request.send(null);
};

//Submit Name
var submit = document.getElementById('submit_btn');
submit.onclick = function(){

         //Create a request object
   var request = new XMLHttpRequest();

  //Capture the response and store it in a variable
  request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE){
        //Take some action
        if(request.status === 200){
              //capture a list of names and render it as a list
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i=0;i<names.length;i++){
                list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML=list;
        }
    }
        //Not done yet
  };

    //Make a request
    var nameInput =  document.getElementById('name');
    var name = nameInput.value;
    request.open('GET','http://localhost:8080/submit-name?name='+name,true);
    request.send(null);

};

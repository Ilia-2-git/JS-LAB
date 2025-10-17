//variables
let flag = true ;
let text = document.getElementById("status-text");
let btn = document.getElementById("on-off");
let statusDisplay = document.getElementById("status");



function serverStatusChanger(){
    
    if (flag){
        text.innerHTML="The server is running!";
        statusDisplay.style.backgroundColor = "green";
        btn.innerHTML = "Turn Off the server."
        flag = false;
    }
    else{
        text.innerHTML = "The server is stopped!";
        statusDisplay.style.backgroundColor = "red";
        btn.innerHTML = "Turn On the server.";
        flag=true;
    }
}
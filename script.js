document.getElementById("tmenu").onclick = function(){
    
    if(document.getElementById("linkmenu").style.display === ""){
    
    document.getElementById("linkmenu").style.display = "initial";
    document.getElementById("test").textContent = "Hide menu";
    }

    if(document.getElementById("linkmenu").style.display === "none"){
        
        document.getElementById("linkmenu").style.display = "initial";
        document.getElementById("test").textContent = "Hide menu";
    

    }else{
        document.getElementById("linkmenu").style.display = "none";
        document.getElementById("test").textContent = "Show menu";
    }

}

document.getElementById("links").onclick = function(){
    document.getElementById("linkmenu").style.display = "none";
    document.getElementById("test").textContent = "Show menu";
}
document.getElementById("tmenu").onclick = function(){
    
    if(document.getElementById("linkmenu").style.display === ""){
    
    document.getElementById("linkmenu").style.display = "initial";
    document.getElementById("test").textContent = "Hide Menu";
    }

    if(document.getElementById("linkmenu").style.display === "none"){
        
        document.getElementById("linkmenu").style.display = "initial";
        document.getElementById("test").textContent = "Hide Menu";
    

    }else{
        document.getElementById("linkmenu").style.display = "none";
        document.getElementById("test").textContent = "Show Menu";
    }

}

document.getElementById("link1").onclick = function(){
    document.getElementById("linkmenu").style.display = "none";
    document.getElementById("test").textContent = "Show Menu";
}

document.getElementById("link2").onclick = function(){
    document.getElementById("linkmenu").style.display = "none";
    document.getElementById("test").textContent = "Show Menu";
}

document.getElementById("link3").onclick = function(){
    document.getElementById("linkmenu").style.display = "none";
    document.getElementById("test").textContent = "Show Menu";
}

document.getElementById("link4").onclick = function(){
    document.getElementById("linkmenu").style.display = "none";
    document.getElementById("test").textContent = "Show Menu";
}
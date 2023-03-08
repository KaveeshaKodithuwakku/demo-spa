

function hideContent(){
    document.getElementById('home').style.display="block";
    document.getElementById('about').style.display = "none";
    document.getElementById('sale').style.display = "none";
    document.getElementById('contact').style.display = "none";
}

hideContent();

function showContent(sPosition) {

    if(sPosition == 1){
        document.getElementById('home').style.display="block";
        document.getElementById('about').style.display = "none";
        document.getElementById('sale').style.display = "none";
        document.getElementById('contact').style.display = "none";
    }else if(sPosition == 2){
        document.getElementById('home').style.display="none";
        document.getElementById('about').style.display = "block";
        document.getElementById('sale').style.display = "none";
        document.getElementById('contact').style.display = "none";
    }else if(sPosition == 3){
        document.getElementById('home').style.display="none";
        document.getElementById('about').style.display = "none";
        document.getElementById('sale').style.display = "block";
        document.getElementById('contact').style.display = "none";
    }else if(sPosition == 4){
        document.getElementById('home').style.display="none";
        document.getElementById('about').style.display = "none";
        document.getElementById('sale').style.display = "none";
        document.getElementById('contact').style.display = "block";
    }
}

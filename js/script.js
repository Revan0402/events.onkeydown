
//butun parametrler

/*onkeydown = function(r) {
    console.log(r)
}*/



//sadece herf

/*onkeydown = function(r) {
    console.log(r.key)
}*/


//sira nomreleri

/*onkeydown = function(r) {
    console.log(r.key + "-" + r.keyCode)
}*/



/*onkeydown = function(r) {
    if(r.keyCode >=48 && r.keyCode <=57){
        this.alert("reqem daxil etmek olmaz")
    }else{
        console.log(r.key + "-" + r.keyCode)
    }
}*/











pos_left = 0
pos_top = 0


onkeydown = function(r){


    if(r.key == "ArrowRight"){
        document.getElementById("myDiv").style.transform = "rotateY(0deg)"
        document.getElementById("myDiv").style.left = pos_left+"px"
        pos_left += 30
    }

    if(r.key == "ArrowLeft"){
        document.getElementById("myDiv").style.transform = "rotateY(180deg)"
        document.getElementById("myDiv").style.left = pos_left+"px"
        pos_left += -30
    }

    if(r.key == "ArrowUp"){
        document.getElementById("myDiv").style.top = pos_top+"px"
        pos_top += -30
    }

    if(r.key == "ArrowDown"){
        document.getElementById("myDiv").style.top = pos_top+"px"
        pos_top += 30
    }
}
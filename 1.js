var answer=parseInt(Math.random()*1000)
var wrong=0
var message="";

function reset(){
    location.reload()
}

function check(){
    var guess = document.getElementById("guess").value;
    var remain = document.getElementById("remain");
    if(wrong <10){
        if(guess>answer){
            message = "Guess a smaller number";
            wrong++;
        }
        else if(guess<answer){   
            message = "Guess a higher number";
            wrong++;
        }
        else{
            message = "Answer is Correct.";
            alert(message);
            reset()
        }
        switch(wrong){
            case 0:
            case 1:
            case 2:
            case 3:
                remain.style.color="green";
                break;
            case 4:
            case 5:
            case 6:
                remain.style.color="orange";
                break;
            case 7:
            case 8:
            case 9:
                remain.style.color="red";
                break;
                case 10:
                remain.style.color="black";
        }
    }
    else{
        message = "Your lives has finished."
        alert(message);
        reset();
    }
    remain.innerHTML = "You have " + (10-wrong) +" lives."
    alert(message+ "Remained time: "+(10-wrong))
}
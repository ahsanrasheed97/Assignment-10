function check()
{ var score = 0;
    var right = document.getElementById("q1-a1")
    var right2 = document.getElementById("q1-a2")
    var right3 = document.getElementById("q1-a3")

if(right.checked == true){
    score++
    alert("Question 1 Right answer")
}
else{
    alert("Question 1 wrong answer")
}

var rightq21 = document.getElementById("q2-a1")
    var right22 = document.getElementById("q2-a2")
    var right23 = document.getElementById("q2-a3")

    if(rightq21.checked == true){
        score++
        alert("Question 2 Right answer")
    }
    else{
        alert("Question 2 wrong answer")
    }
    

    var rightq31 = document.getElementById("q3-a1")
    var right32 = document.getElementById("q3-a2")
    var right33 = document.getElementById("q3-a3")

    if(rightq31.checked == true){
        score++
        alert("Question 3 Right answer")
    }
    else{
        alert("Question 3 wrong answer")
    }
    
alert("your score " +score)

}

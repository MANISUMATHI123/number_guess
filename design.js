var a=Math.floor(Math.random()*100)+1;
var count=1;
function guessNumber(){
    var val=parseInt(document.getElementById("guessfield").value);
    if(val==a)
    {
        document.getElementById("result").textContent="Heyyy Guy!!!!!!\nSuccessfully you are find the number!!!!!!\n Attempt Count : "+count;
    }
    else if(val<a)
    {
        document.getElementById("result").textContent="Good!!!!!!\n Try to enter Greater Number!!!!!!\nYour count Increased !!!!!!\n Your count Now "+count+"!!!!!!Think be Shorply!!!!!";
        count++;
    }
    else{
        document.getElementById("result").textContent="Good!!!!!!\n Try to enter Least Number!!!!!!\nYour count Increased !!!!!!\n Your count Now "+count+"!!!!!!Think be Shorply!!!!!";
        count++;
    }
}
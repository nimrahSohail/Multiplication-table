// const number=prompt("ENTER NUMBER:");
// var num=1;

// while(num<=10){
//     // console.log(`${number} x ${num} =`,num++ * number);
//     document.getElementById('print').innerHTML=`${number} x ${num} =`,num++ * number;
// }

function print(){
    let x=document.getElementById("tt").value;
    var result = ""; // initialize result as empty and then store each line in it
    for(var i=1;i<=10; i++){
        result = result + "<p>" + x + "x" + i + "=" + x*i + "</p>";
    }
    document.getElementById("jaldikaro").innerHTML=result;
}






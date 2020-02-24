
let i = null;
do {
    i = parseInt(prompt("enter a number from 1 to 10!"));
    alert("so vua nhap la : "+i);
    if (i < 1 || i > 10){
        alert("Exit program!!")
    }
}while (i >= 1 && i <= 10);


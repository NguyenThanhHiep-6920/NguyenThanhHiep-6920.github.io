function factorial(n){
    if ((n==0)||(n==1)) return 1;
    else return n*factorial(n-1);
}


function permutace(){
    let c;
    do { c=prompt("Chcete vypočítat s opakovaním nebi ne? ");}
    while ((c!='ano')&&(c!='ne'));
    let x=prompt("kolik prvek mate: ");
    if(c=='ne'){
    let p1=factorial(x);
    alert(`permutace P(${x})= ${p1}`);
    }
    else alert("sorry, now i dont find out the solution");  
}
function factorial(x){
    if ((x==0)||(x==1)) return 1;
    else return x*factorial(x-1);
}


function kombinace(){
    let c
    do { c=prompt("Chcete vypočítat s opakovaním nebi ne? ");}
    while ((c!='ano')&&(c!='ne'));
    let n=prompt("enter n: ");
    let k= prompt("enter k: ");
    if (c=='ne'){
        let k1= factorial(n)/(factorial(n-k)*factorial(k));
        alert(`kombinace K(${k},${n})= ${k1}`);
    }
    else {
        let k2= factorial(k+n-1)/(factorial(n-1)*factorial(k));
        alert(`kombinace s opakováním K'(${k},${n})= ${k2}`);
    }
}
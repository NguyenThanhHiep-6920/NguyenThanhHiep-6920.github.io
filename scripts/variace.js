function factorial(x){
    if ((x==0)||(x==1)) return 1;
    else return x*factorial(x-1);
}


function variace(){
    let c;
    do { c=prompt("Chcete vypočítat s opakovaním nebi ne? ");}
    while ((c!='ano')&&(c!='ne'));
    let n=prompt("enter n: ");
    let k= prompt("enter k: ");
    if (c=='ne'){
        let v1=factorial(n)/factorial(n-k);
        alert(`variace V(${k},${n})=${v1}`);
    }
    else {
        let v2=n**k;
        alert(`variace s opakováním V'(${k},${n})=${v2}`);
    }
}
// js de

function topla(x,y) {
    return x + y;
}

// ts de 

function topla2 (x:number, y:number) : number {
    return x + y;
}

// anonim seklinde de tanımlayabılırız

let topla3 = function(x:number, y:number):number {
    return x + y;
}

console.log(topla(2,4));
console.log(topla("ankara",2))
console.log(topla2(2,4))
console.log(topla3(4,8));


//default kullanım
function topla4 (x:number, y:number=4) : number {
    return x + y;
}
console.log(topla4(3))


//optional hep sonda olmalı
function topla5 (x:number, y?:number) : number {
    // y verildi ise
    if(y){
        return x + y; 
    }
    return x
    
}
console.log(topla5(3,40))

// rest
// parametre sayısı belli degıl ıse
function davetEt(ilkDavetli:string,...digerleri:string[]):string {
    return ilkDavetli + " " + digerleri.join(" ");
}
console.log("erkan", "mehmet","salih","ahmet");


function davetliListesi(...gelenKisiler:string[]):string {
    return gelenKisiler.join(" ");
}




// js de
function topla(x, y) {
    return x + y;
}
// ts de 
function topla2(x, y) {
    return x + y;
}
// anonim seklinde de tanımlayabılırız
var topla3 = function (x, y) {
    return x + y;
};
console.log(topla(2, 4));
console.log(topla("ankara", 2));
console.log(topla2(2, 4));
console.log(topla3(4, 8));
//default kullanım
function topla4(x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
}
console.log(topla4(3));
//optional hep sonda olmalı
function topla5(x, y) {
    // y verildi ise
    if (y) {
        return x + y;
    }
    return x;
}
console.log(topla5(3, 40));
// rest
// parametre sayısı bello degıl ıse
function davetEt(ilkDavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkDavetli + " " + digerleri.join(" ");
}
console.log("erkan", "mehmet", "salih", "ahmet");

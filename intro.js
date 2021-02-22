function selamVer(isim) {
    return "Merhaba " + isim;
}
var mesaj = selamVer('erkan abi');
console.log(mesaj);
// js de run time da alınır hata compile time da sıkıntı olmuyor...
// typescripte compile Zamanda kızar
var sayi;
sayi = 10;
sayi = 10.4;
var sehir;
sehir = "siirt";
sehir = "istanbul";
var dogruMu;
dogruMu = true;
var isim = "erkan";
var sayilar = [1, 2, 4];
//generic
var sayilar2 = [1, 2, 4]; //generic type...
// tuple tanımı
var dizi = [2, "ankara"];
//enum
var Renkler;
(function (Renkler) {
    Renkler[Renkler["Kirmizi"] = 1] = "Kirmizi";
    Renkler[Renkler["Siyah"] = 2] = "Siyah";
    Renkler[Renkler["Mavi"] = 3] = "Mavi";
})(Renkler || (Renkler = {}));
var renk;
renk = Renkler.Kirmizi;
//Any
// bize gelecek olan veriden emin değilken kullanıyoruz.
// hangi tipte oldugu belli olmayan durumlar ıcın
//butun verı tıplerını kullanabılırsın
var deger = "Ankara";
deger = 2;
deger = {};
//void
//fonksiyonlarda kullanırız
//herhangi birsey dondurmek ıstemezsek 
var deger2 = undefined;
function selamVer2() {
    console.log("Merhaba");
    //return 5; kızar bu ifadeye
}
//undefined
//null ile karıstırılır
var yas;
// yas = undefined , cunku deger atamadın
// null referans tiplerde kullanılır
var Musteri = /** @class */ (function () {
    function Musteri() {
    }
    return Musteri;
}());
// eger sen bunu newlemesen referansı olusmamıstır null dır.

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ev = /** @class */ (function () {
    //constructor
    //class referans tiptir
    //classı kullanabılmek ıcın instance olusturmak gerekir
    // new --> constructor calısıyor
    function Ev(odaSayisi, pencereSayisi, kat) {
        this._odaSayisi = odaSayisi;
        this._kat = kat;
        this._pencereSayisi = pencereSayisi;
    }
    Ev.prototype.yemekYe = function () {
        console.log(this._kat + " Katlı Evde " + "Yemek yendi");
    };
    return Ev;
}());
var ev = new Ev(3, 4, 5);
ev.yemekYe();
var Kisi = /** @class */ (function () {
    function Kisi() {
    }
    Object.defineProperty(Kisi.prototype, "name", {
        get: function () {
            return "Sayın " + this._name;
        },
        set: function (ad) {
            this._name = ad;
        },
        enumerable: false,
        configurable: true
    });
    Kisi.prototype.kaydet = function () {
        console.log("Kişi kaydedildi...");
    };
    return Kisi;
}());
var Musteri = /** @class */ (function (_super) {
    __extends(Musteri, _super);
    function Musteri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Musteri.prototype.satisYap = function () {
        console.log(this.isim + " tarfından satis yapildi...");
    };
    return Musteri;
}(Kisi));
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.massOde = function () {
        console.log("Maas ödendi...");
    };
    return Personel;
}(Kisi));
var müsteri = new Musteri();
müsteri.name = "erkan";
console.log(müsteri.name);
müsteri.kaydet();
müsteri.satisYap();
var personel = new Personel();
personel.kaydet();
personel.massOde();
//erisim bildirgecleri
//public: heryerden erısılebılır
//private: sadece class ıcınde
//protected: private +  miras alınan class larda kullanılabılır

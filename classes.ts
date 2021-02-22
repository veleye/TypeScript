class Ev{

    // özellikler
    public _odaSayisi:number;
    public _pencereSayisi:number;
    public _kat:number;
    private _sahibi:string // tanımlandıgı class ıcerısınde gecerli
    protected _mirasSahibi:string // private için gecerli hersey gecerli // miras gecilen class da kullanılabılır

    //constructor
    //class referans tiptir
    //classı kullanabılmek ıcın instance olusturmak gerekir
    // new --> constructor calısıyor
    
    constructor(odaSayisi:number, pencereSayisi:number, kat:number){
     this._odaSayisi = odaSayisi
     this._kat = kat
     this._pencereSayisi = pencereSayisi   
    }

    yemekYe(){
        console.log(this._kat + " Katlı Evde " + "Yemek yendi");
    }



}

let ev = new Ev(3,4,5)
ev.yemekYe()

class Kisi {
    protected isim:string
    private _name:string
    
    get name():string{
        return "Sayın " + this._name
    }

    set name(ad:string){
        this._name = ad
    }



     kaydet(){
        console.log("Kişi kaydedildi...");
    }
}

class Musteri extends Kisi {
    satisYap(){
        console.log(this.isim + " tarfından satis yapildi...");
    }
}

class Personel extends Kisi{
    massOde(){
        console.log("Maas ödendi...");
    }
}

let müsteri = new Musteri()
müsteri.name = "erkan"
console.log(müsteri.name)
müsteri.kaydet()
müsteri.satisYap()

let personel = new Personel()
personel.kaydet()
personel.massOde()


//erisim bildirgecleri
//public: heryerden erısılebılır
//private: sadece class ıcınde
//protected: private +  miras alınan class larda kullanılabılır


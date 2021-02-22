// kendileri aslında class
// tek baslarına anlam ıfade edılmezler
// miras yontemı ıle kullanılırlar

// banka kredi verir
// onaylandıktan sonra adama kredı verıldı dıye kayıt atılır
// kaydetmek orrtak bır ıs
// kredi hesaplanırken tuketıcı kredısı degısıyor
// farklı bır kuruma kredı verırken ıcerık degısıyor
// ama kaydetme ısı ortak
// ortak ve ortak olmayan operasyonları belırlemek lazım

abstract class KrediBase {
    constructor() {

    }

    //ortak
    //tamamlanmıs
    kaydet():void{
        console.log("Kaydedildi...")
    }

    //her yerde ortak degıl
    //imza seklınde bırakılıyor
    abstract hesapla():void;

}

class TuketiciKredi extends KrediBase{
  
    constructor(){
        super();
    }

    hesapla(): void {
        console.log("tüketici kredisine göre hesap yapıldı...")
    }

}

class KonutKredi extends KrediBase{
  
    constructor(){
        super();
    }

    hesapla(): void {
        console.log("konut kredisine göre hesap yapıldı...")
    }

    baskaBirOperasyon(){

    }

}

let tüketiciKredisi = new TuketiciKredi()
tüketiciKredisi.hesapla()
tüketiciKredisi.kaydet()

let konutKredisi = new KonutKredi()
konutKredisi.hesapla()
konutKredisi.hesapla()
konutKredisi.baskaBirOperasyon()


let kredi:KrediBase
kredi = new TuketiciKredi()
kredi = new KonutKredi()





function selamVer(isim: string){
    return "Merhaba " + isim
}




let mesaj = selamVer('erkan abi');
console.log(mesaj);

// js de run time da alınır hata compile time da sıkıntı olmuyor...
// typescripte compile Zamanda kızar

let sayi:number
sayi = 10
sayi = 10.4

let sehir:string
sehir = "siirt"
sehir = "istanbul"

let dogruMu : boolean
dogruMu = true 

let isim : string = "erkan"

let sayilar:number[] = [1,2,4]

//generic
let sayilar2 : Array<number> = [1,2,4] //generic type...

// tuple tanımı
let dizi:[number,string] = [2,"ankara"]

//enum
enum Renkler {
    Kirmizi = 1,
    Siyah = 2,
    Mavi = 3
}

let renk : Renkler
renk = Renkler.Kirmizi

//Any
// bize gelecek olan veriden emin değilken kullanıyoruz.
// hangi tipte oldugu belli olmayan durumlar ıcın
//butun verı tıplerını kullanabılırsın
let deger : any = "Ankara"
deger = 2
deger = {}

//void
//fonksiyonlarda kullanırız
//herhangi birsey dondurmek ıstemezsek 
let deger2 : void = undefined

function selamVer2() : void {
    console.log("Merhaba")
    //return 5; kızar bu ifadeye
}

//undefined
//null ile karıstırılır
let yas : number
// yas = undefined , cunku deger atamadın
// null referans tiplerde kullanılır

class Musteri {

}

// eger sen bunu newlemesen referansı olusmamıstır null dır.





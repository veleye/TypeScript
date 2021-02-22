function deger(x:number):number{
    return x;
}

let sayi = deger(10)
console.log(sayi)

// aynı işlemi farklı paramatreler ile yapmak istesek...
function farklıDegerler<T>(x:T):T{
    return x
}


let farkliSayi = farklıDegerler<number>(2)
let sehir = farklıDegerler<string>("Siirt")


class GenericClass<T> {
    degisken:T

    fonksiyon(parameter:T):T{
        return parameter;
    }
}

let sinif = new GenericClass<number>()
sinif.degisken = 3
sinif.fonksiyon(5)
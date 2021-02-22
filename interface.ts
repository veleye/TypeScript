interface Product{
    
    id:number;
    name:string;
    unitPrice:number;

}

function save(product:Product){

    console.log(product.name + " kaydedildi.")

}

//tamamını eksiksiz vermemiz gerekiyor...
save({id:1,name:"laptop",unitPrice:10})


interface PersonService{
    save()
}


class CustomerService implements PersonService{
    
    //zorunlu implemente edilmesiGerekiyor...
    save() {
        
    }
    
}
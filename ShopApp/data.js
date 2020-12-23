module.exports= function() {
    return {
        products: [
            {id:1, name:"Samsung S5",   price:1000, imageUrl:'1.jpg',description:"İdare eder", category:'Telefon'},
            {id:2, name:"Samsung S6",   price:2000, imageUrl:'2.jpg',description:"Gayet güzel",category:'Telefon'},
            {id:3, name:"Hp Laptop",    price:3000, imageUrl:'3.jpg',description:"Fena değil",category:'Bilgisayar'},
            {id:4, name:"Samsung S8",   price:4000, imageUrl:'4.jpg',description:"Çok kötü",category:'Telefon'},
            {id:5, name:"Samsung S9",   price:5000, imageUrl:'5.jpg',description:"Çok pahalı",category:'Telefon'},
            {id:6, name:"Camera Nikon", price:6000, imageUrl:'6.jpg',description:"İdare eder",category:'Elektronik'}

        ],
        categories: [
            {id:1 , name:"Telefon"},
            {id:2 , name:"Bilgisayar"},
            {id:3 , name:"Elektronik"}
        ],
        orders:[]
    }
}
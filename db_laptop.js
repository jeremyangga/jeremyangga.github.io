let laptopObj = {
    Asus: [{
            id: 1,
            nama_laptop : "Asus Chromebook CX 5",
            harga : 8_300_000,
            url : "https://dlcdnwebimgs.asus.com/gain/1861902a-cee6-4062-ae2c-489ea44641ed/",
            tipe: "Bisnis",
            CPU : "Intel i5",
            RAM : "16GB",
            Storage : "128GB",
            stok : 5
        },
        { 
            id: 2,
            nama_laptop : "Asus ROG Zephyrus G14",
            harga : 22_800_000,
            url : "https://dlcdnwebimgs.asus.com/gain/7583764C-92E3-413D-A5AD-4CB7D9713802/w1000/h732",
            tipe: "Gaming",
            CPU : "AMD Ryzen 9",
            RAM : "8GB",
            Storage : "1TB",
            stok : 5
        },
        { 
            id: 3,
            nama_laptop : "Asus Zenbook S 13 OLED",
            harga : 21_000_000,
            url : "https://dlcdnwebimgs.asus.com/gain/af603f9f-03e4-4a56-b632-598b6e15c509/",
            tipe: "Bisnis",
            CPU : "Intel i7",
            RAM : "32GB",
            Storage : "1TB",
            stok : 5
        }],
        
        Apple: [
        { 
            id: 4,
            nama_laptop : "Apple MacBook Air (M2)",
            harga : 16_500_000,
            url : "https://cdn.eraspace.com/media/catalog/product/m/a/macbook_air_m2_midnight_pdp_image_position-3__id_5.jpg",
            tipe: "Bisnis",
            CPU : "M2",
            RAM : "8GB",
            Storage : "512GB",
            stok : 3
        },
        { 
            id: 5,
            nama_laptop : "Apple MacBook Pro 14 (2021)",
            harga : 35_985_000,
            url : "https://cdn.eraspace.com/media/catalog/product/m/a/macbook_pro_2021_14_inch_space_grey_1_2.jpg",
            tipe: "Bisnis",
            CPU : "M1 Pro",
            RAM : "16GB",
            Storage : "512GB",
            stok : 2
        }],
        
        Dell : [
        { 
            id: 6,
            nama_laptop : "Dell XPS 13",
            harga : 8_985_000,
            url : "https://media.cnn.com/api/v1/images/stellar/prod/img-1742-1.jpg?q=h_2268,w_4032,x_0,y_0",
            tipe: "Bisnis",
            CPU : "Intel i7",
            RAM : "8GB",
            Storage : "512GB",
            stok : 15
        },
        { 
            id: 7,
            nama_laptop : "Dell Alienware m15",
            harga : 19_500_000,
            url : "https://www.softcom.co.id/wp-content/uploads/2021/11/AlienWare-M15-R5-5.jpg",
            tipe: "Gaming",
            CPU : "Intel i7",
            RAM : "16GB",
            Storage : "512GB",
            stok : 6
        }],
        
        Lenovo : [
        { 
            id: 8,
            nama_laptop : "Lenovo ThinkPad X1 Carbon Gen 9",
            harga : 19_410_000,
            url : "https://www.jktgadget.com/wp-content/uploads/2022/10/LENOVO-THINKPAD-X1-CARBON-GEN-10-1.jpg",
            tipe: "Bisnis",
            CPU : "Intel i7",
            RAM : "16GB",
            Storage : "512GB",
            stok : 2
        },
        { 
            id: 9,
            nama_laptop : "Lenovo Legion 5 Pro",
            harga : 18_720_000,
            url : "https://www.softcom.co.id/wp-content/uploads/2021/06/Legion-5-Pro-Storm-Grey-5.jpg",
            tipe: "Bisnis",
            CPU : "AMD Ryzen 7",
            RAM : "16GB",
            Storage : "1TB",
            stok : 2
        }]
}

function saveToLocal(){
    window.localStorage.setItem("laptopObj", JSON.stringify(laptopObj));
}

function showObject(){
    return laptopObj;
}

export {showObject, saveToLocal};
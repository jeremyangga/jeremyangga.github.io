let dataLaptop = laptopObj;
let keysDataLaptop = Object.keys(dataLaptop).length;
let merekLaptop = '';

// $.merekJquery = function() {
//     alert("jQuery");
//  };


function contoh() {
    console.log('contoh')
}

$(document).ready(function() {
    $(window).on('load', function() {
        showMerek();
        showProduct();
        toKeranjang();
    });

    $("#filter_merek").change(function() {
        let selectedMerek = $(this).val();
        console.log("Selected option value (using ID): " + selectedMerek);
        getFilter(selectedMerek);   
      });
  });
  
function getFilter(merek){
    console.log('getFilter()')
    merekLaptop = merek;
    console.log('merek laptop:', merekLaptop);
    filterProductByMerek(merekLaptop);
}


function filterProductByMerek(merek){
    console.log('filterProductByMerek()')

    let template = '';
    if(!merek){
        return 'false';
    } else if(merek === 'semua'){
        showProduct();
    }else {
        for(let i = 0; i < dataLaptop[merek].length; i++){
            let hargaInRupiah = new Intl.NumberFormat("id-ID", { style: "currency", currency:"IDR"}).format(dataLaptop[merek][i].harga);
            template += `
            <div class="card">
                <img src="${dataLaptop[merek][i]['url']}" width="200px" height="200px">
                <h5>${merek}</h5>
                <h4>${dataLaptop[merek][i]['nama_laptop']}</h4>
                <p>${hargaInRupiah}</p>
                <p>${dataLaptop[merek][i].tipe}</p>
                <button class="btnCart" id="btn${dataLaptop[merek][i]['id']}" onclick="toKeranjang(${dataLaptop[merek][i]['id']})" value="${dataLaptop[merek][i]['id']}">Beli Produk</button>
            </div>
        `
        }
        document.querySelector('.c-card').innerHTML = template
    }
    
}

function showProduct(){
    console.log('showProduct()');
    if(keysDataLaptop === 0){
        document.querySelector('.c-card').innerHTML = "<h4>Data Not Found</h4>"
    }else{
        console.log('masuk else di produk');
        let template = '';
        
        for (let keys in dataLaptop) {
            console.log(dataLaptop[keys], "---");    
            for(let i = 0; i < dataLaptop[keys].length; i++){
                
                let hargaInRupiah = new Intl.NumberFormat("id-ID", { style: "currency", currency:"IDR"}).format(dataLaptop[keys][i].harga);
                console.log(hargaInRupiah)
                template += `<div class="card">
                    <img src="${dataLaptop[keys][i]['url']}" width="200px" height="200px">
                    <h5>${keys}</h5>
                    <h4>${dataLaptop[keys][i]['nama_laptop']}</h4>
                    <p>${hargaInRupiah}</p>
                    <p>${dataLaptop[keys][i].tipe}</p>
                 <button class="btnCart" id="btn${dataLaptop[keys][i]['id']}" onclick="toKeranjang(${dataLaptop[keys][i]['id']})" value="${dataLaptop[keys][i]['id']}">Beli Produk</button>
                </div>
            `
            }
        }
        // console.dir(document.querySelector('.c-card').innerHTML, '\n<<-- before');
        console.log('before')
        document.querySelector('.c-card').innerHTML = template
        // console.dir(document.querySelector('.c-card').innerHTML);

    }
}

function showMerek(){
    console.log('showMerek()')

    let filterMerek = `<option selected disabled>Filter berdasarkan merek</option>
    <option value="semua">Semua merek</option>`;
    for(let keys in dataLaptop){
        filterMerek += `
        <option value="${keys}">${keys}</option>`
    }
    document.querySelector('#filter_merek').innerHTML = filterMerek;
}

let idToKeranjang = 0;
function toKeranjang(id){
    // console.log('toKeranjang()')
    // // let id = document.getElementsByClassName('btnCart');
    idToKeranjang = id;
    console.log(idToKeranjang);
} 

function getDataFromLocalStorage() {
    let orders = JSON.parse(window.localStorage.getItem('outputBelanja'));
  
    if (!orders) {
      orders = {};
    }
  
    return orders;
  }

let listBelanja = getDataFromLocalStorage();
let outputBelanja = []

function toKeranjang(id){
    // idToKeranjang = id;
    console.log(idToKeranjang, "<<<<");
    // console.log(dataLaptop["Asus"][id])
    for(let keys in dataLaptop){
        console.log(keys);
        // console.log(dataLaptop[keys])
        for(let i = 0; i < dataLaptop[keys].length; i++){
            // console.log(dataLaptop[keys][i]["nama_laptop"])
            if(dataLaptop[keys][i]["id"] === id) {
                if(!listBelanja[id]){
                    listBelanja[id] = {
                        merk: keys,
                        nama: dataLaptop[keys][i]["nama_laptop"],
                        harga: dataLaptop[keys][i]["harga"],
                        stok: dataLaptop[keys][i]["stok"],
                        gambar: dataLaptop[keys][i]["url"] 
                    }
                }
                // outputBelanja.push(listBelanja)
                // console.log(listBelanja);
            }
        } 
    }
    // console.log(outputBelanja, "-----------------")
    console.dir(listBelanja, "<<<<<<<<<<<<<<")
    window.localStorage.setItem("outputBelanja", JSON.stringify(listBelanja));
} 
let iconKeranjang = document.querySelector('.iconKeranjang');
let keranjang = document.querySelector('.keranjang');
let close = document.querySelector('.close')
iconKeranjang.addEventListener('click',function(){
    if(keranjang.style.right == '-100%'){
        keranjang.style.right = '0';
        container.style.transform = 'translateX(-400px)';
    } else {
        keranjang.style.right = '-100%';
        container.style.transform = 'translateX(0)';
    }
});

close.addEventListener('click', function(){
    keranjang.style.right = '-100%';
    container.style.transform = 'translateX(0)';
})

// showMerek();
// showProduct();
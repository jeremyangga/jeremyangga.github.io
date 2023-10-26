import {showObject} from './db_laptop.js'

let dataLaptop = showObject();
let keysDataLaptop = Object.keys(dataLaptop).length;
let merekLaptop = '';

// $.merekJquery = function() {
//     alert("jQuery");
//  };

$(document).ready(function() {
    $(window).on('load', function() {
        showMerek();
        showProduct();
        getFilter();
    });

    $("#filter_merek").change(function() {
        let selectedMerek = $(this).val();
        console.log("Selected option value (using ID): " + selectedMerek);
        getFilter(selectedMerek);
      });
  });
  
function getFilter(merek){
    merekLaptop = merek;
    console.log('merek laptop:', merekLaptop);
    filterProductByMerek(merekLaptop);
}


function filterProductByMerek(merek){
    let template = '';
    if(!merek){
        return 'false';
    }
    console.log('ini data laptop:',dataLaptop[merek].length);
    for(let i = 0; i < dataLaptop[merek].length; i++){
        let hargaInRupiah = new Intl.NumberFormat("id-ID", { style: "currency", currency:"IDR"}).format(dataLaptop[merek][i].harga);
        template += `
        <div class="card">
            <img src="${dataLaptop[merek][i]['url']}" width="200px" height="200px">
            <h5>${merek}</h5>
            <h4>${dataLaptop[merek][i]['nama_laptop']}</h4>
            <p>${hargaInRupiah}</p>
            <p>${dataLaptop[merek][i].tipe}</p>
            <button>Detail Produk</button>
        </div>
    `
    }
    
}

function showProduct(){
    if(keysDataLaptop === 0){
        document.querySelector('.c-card').innerHTML = "<h4>Data Not Found</h4>"
    }else{
        let template = '';
        for (let keys in dataLaptop) {
            for(let i = 0; i < dataLaptop[keys].length; i++){
                let hargaInRupiah = new Intl.NumberFormat("id-ID", { style: "currency", currency:"IDR"}).format(dataLaptop[keys][i].harga);
                template += `
                <div class="card">
                    <img src="${dataLaptop[keys][i]['url']}" width="200px" height="200px">
                    <h5>${keys}</h5>
                    <h4>${dataLaptop[keys][i]['nama_laptop']}</h4>
                    <p>${hargaInRupiah}</p>
                    <p>${dataLaptop[keys][i].tipe}</p>
                    <button>Detail Produk</button>
                </div>
            `
            }
        }
        filterProductByMerek('Asus');
        document.querySelector('.c-card').innerHTML = template
    }
}

function showMerek(){
    let filterMerek = `<option selected disabled>Filter berdasarkan merek</option>
    <option value="semua">Semua merek</option>`;
    for(let keys in dataLaptop){
        filterMerek += `
        <option value="${keys}">${keys}</option>`
    }
    document.querySelector('#filter_merek').innerHTML = filterMerek;
}



// showMerek();
// showProduct();
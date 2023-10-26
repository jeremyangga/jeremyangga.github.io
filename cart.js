// const userBelanja = JSON.parse(localStorage.getItem('outputBelanja'));
// // console.log(Object.keys(userBelanja).length);
// console.log(userBelanja);
// window.localStorage.setItem("outputBelanja", JSON.stringify(userBelanja));
function getDataFromLocalStorage() {
    let orders = JSON.parse(window.localStorage.getItem('outputBelanja'));
  
    if (!orders) {
      orders = {};
    }
  
    return orders;
}

let userBelanja = getDataFromLocalStorage();
let hargaTotal = 0;
function showCart(){
    let html = "";
    let checkout = "";
    if(Object.keys(userBelanja).length === 0 || !userBelanja){
        html = "<h1>Tidak ada data!</h1> <h2>Silahkan melakukan pembelian dahulu</h2>"
        console.log('masuk');
    } else {
        for(let keys in userBelanja){
            let hargaInRupiah = new Intl.NumberFormat("id-ID", { style: "currency", currency:"IDR"}).format(userBelanja[keys]['harga']);
            console.log(keys);
            hargaTotal += userBelanja[keys]['harga'];
            html += `<div class="order-header">
            <div id="tmp-order" class="order-item">
            <h3 id="nama-laptop" class="capitalize">${userBelanja[keys]['nama']}</h3>
          </div> <div class="item-laptop">
          <div> <img id="gambar-laptop" class="laptop" src="${userBelanja[keys]['gambar']}"> </div>
          <div class="column-2">
            <div class="row-2">
            <input type="number" id="quantity${keys}" onchange="controlStock(${keys}, ${userBelanja[keys]['harga']})" name="quantity" min="1" max="${userBelanja[keys]["stok"]}" value="1">
                <div>Stock: <span id="stock${keys}">${userBelanja[keys]["stok"]}</span></div>
            </div>
            <div class="row-3">
              <div id="harga">Harga:<p id='hargaLaptop${keys}'>${hargaInRupiah}</p></div>
            </div>
            <button id="delete" onclick="initiateOrderDeletion(-1)">Hapus</button>
            </div>
           </div>
           </div>
          `
        }
        checkout = `
            <div id="checkout-info">
                <span>Total Belanja</span>
                <span id="checkout-harga">${new Intl.NumberFormat("id-ID", { style: "currency", currency:"IDR"}).format(hargaTotal)}</span>
            </div>
            <div>
                <button id="checkout-button" onclick="klikCheckout()">Checkout</button>
            </div>
            `
    }

    document.querySelector('.order-list').innerHTML = html
    document.querySelector('.checkout-container').innerHTML = checkout
}
let hargaIncludeStock = 0;
function controlStock(id, harga){
//     let x = document.getElementById("harga");
//   x.value = x.value.toUpperCase();
    console.log(id,'--');
    let stockUpdate = document.getElementById(`quantity${id}`).value;
    let hargaUpdate = harga * Number(stockUpdate);
    let hargaInRupiah = new Intl.NumberFormat("id-ID", { style: "currency", currency:"IDR"}).format(hargaUpdate);
    console.log(hargaInRupiah);
    document.getElementById(`hargaLaptop${id}`).innerHTML = hargaInRupiah;
    let stockInHTML = document.getElementById(`stock${id}`).textContent;
    console.log(stockInHTML);
    let stockNow = Number(stockInHTML) - Number(stockUpdate);
    console.log(stockNow);
    // document.getElementById(`stock${id}`).innerHTML = stockNow;
    if(Number(stockUpdate) > 1){
        hargaIncludeStock += hargaTotal + hargaUpdate;
        console.log(hargaIncludeStock);
        hargaLaptopTotal(hargaIncludeStock);
    } else{

    }
}


showCart();
console.log(hargaTotal,'harga');

function hargaLaptopTotal(harga){
    let html = '';
    html = `
    <div id="checkout-info">
    <span>Total Belanja</span>
    <span id="checkout-harga">${new Intl.NumberFormat("id-ID", { style: "currency", currency:"IDR"}).format(harga)}</span>
    </div>
    <div>
    <button id="checkout-button" onclick="klikCheckout()">Checkout</button>
    </div>
    `
    document.querySelector('.checkout-container').innerHTML = html
}
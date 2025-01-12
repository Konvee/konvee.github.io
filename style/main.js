// ==================== //
//  KONVEE_STORE_ESHOP  //
// ==================== //
// FILE : main.js       //
// UPDT : 11.01.2025    //
// ==================== //
// Copyright (c) 2025 Konvee eshop

// lista de constantes :::
const KG = "kg";  // Kilogramo
const LB = "lb";  // Libras
const LT = "L";   // Litro
const ML = "ml";  // mililitro

// lista de paises :::
const BRASIL = "bra";
const CUBA = "cub";
const ESPANA = "esp";

// Listado de productos :::
const PRODUCT = [
    {
        Name: "Aceite de girasol",
        Cant: 1,
        Unid: LT,
        Code: "B002",
        Price: 800.00,
        Country: ESPANA,
        DPrice: 0.00,
        Down: false,
        Stock: true
    },
    {
        Name: "Azúcar blanca (Bolsa pequeña) <i>(Granel)</i>",
        Cant: 1,
        Unid: KG,
        Code: "B001",
        Price: 750.00,
        Country: BRASIL,
        DPrice: 0.00,
        Down: false,
        Stock: true
    },
    {
        Name: "Azúcar blanca (Bolsa grande) <i>(Granel)</i>",
        Cant: 5,
        Unid: KG,
        Code: "B001",
        Price: 3750.00,
        Country: BRASIL,
        DPrice: 3500.00,
        Down: true,
        Stock: true
    },
    {
        Name: "Refresco pomo sabor mate",
        Cant: 1.5,
        Unid: LT,
        Code: "D001",
        Price: 550.00,
        Country: CUBA,
        DPrice: 0.00,
        Down: false,
        Stock: true
    }
];

// Lista de productos del cliente :::
let BuyListClient = [];
let TotalBuyCost = 0.00;

document.addEventListener('DOMContentLoaded', function () {
    // Lista de productos.
    const ProductList = document.getElementById('product-list');
    // Buycar.
    const BuycarCount = document.getElementById('buycar_count_product');
    const ListProdEnc = document.getElementById('lista-prod-enc');
    // Botones de compra y cancelacion.
    const ButtonCancelBuy = document.getElementById('button_cancel');
    const ButtonSendBuy = document.getElementById('button_send');
    // Suma de productos en el BuyCar.
    const TotalComp = document.getElementById('suma_prod');
    // Boton de cancelacion.
    ButtonCancelBuy.addEventListener('click', () => {
        if (BuyListClient.length != 0) { // En caso de que el carro no este vacio.
            BuyListClient.length = 0;
            BuycarCount.innerHTML = 0;
            TotalBuyCost = 0;
            TotalComp.innerHTML = `<b>TOTAL: 0.00 cup </b>`;
            while (ListProdEnc.childElementCount != 0) {
                ListProdEnc.removeChild(ListProdEnc.firstChild);
            }
        }
    });
    // Boton de compra.
    ButtonSendBuy.addEventListener('click', () => {

    });
    // Apartado de productos.
    PRODUCT.forEach(prod => {
        if (prod.Stock == true) { // Si el producto esta en STOCK.
            if (prod.Down == false || (prod.Down == true && prod.DPrice > 0)) {
                let pDiv = document.createElement('div');
                pDiv.classList.add('product');
                // Imagen del producto.
                let pImg = document.createElement('img');
                pImg.classList.add("img_product");
                pImg.src = `res/${prod.Code}.webp`;
                pImg.alt = `imagen de ${prod.Name}`;
                // Imagen de rebaja.
                let pDown;
                if (prod.Down == true) {
                    pDown = document.createElement('img');
                    pDown.src = 'res/down.webp';
                    pDown.alt = 'rebaja';
                    pDown.classList.add('down_img');
                }
                // Info del producto.
                let pInfo = document.createElement('div');
                let pName = document.createElement('h3');
                pName.innerHTML = prod.Name; // Nombre.
                let pPrice = document.createElement('p'); // Precio.
                if (prod.Down == false) {
                    pPrice.innerHTML = `<b>${prod.Price.toFixed(2)} cup</b>  `;
                } else {
                    pPrice.innerHTML = `<b><s>${prod.Price.toFixed(2)} cup</s> ${prod.DPrice.toFixed(2)} cup</b>  `;
                }
                let pContry = document.createElement('img'); // Pais.
                pContry.classList.add("flag_country");
                pContry.src = `res/${prod.Country}.webp`;
                pContry.alt = `${prod.Country}`;
                pPrice.appendChild(pContry);
                // Cantidades e equivalencias.
                let pCant = document.createElement('p');
                let pEquiv = document.createElement('p');
                if (prod.Unid == KG) {
                    pCant.innerHTML = `<sub><i>${prod.Cant.toFixed(1)} ${prod.Unid} (${(prod.Cant * 2.2).toFixed(1)} ${LB})</i></sub>`;
                    if (prod.Down == false) {
                        if (prod.Cant != 1) {
                            pEquiv.innerHTML = `<sub><i>${(prod.Price / prod.Cant).toFixed(2)} cup/${KG} - </i></sub>`;
                        }
                        pEquiv.innerHTML += `<sub><i>${(prod.Price / (prod.Cant * 2.2)).toFixed(2)} cup/${LB}</i></sub>`;
                    } else {
                        if (prod.Cant != 1) {
                            pEquiv.innerHTML = `<sub><i>${(prod.DPrice / prod.Cant).toFixed(2)} cup/${KG} - </i></sub>`;
                        }
                        pEquiv.innerHTML += `<sub><i>${(prod.DPrice / (prod.Cant * 2.2)).toFixed(2)} cup/${LB}</i></sub>`;
                    }
                } else if (prod.Unid == LT) {
                    pCant.innerHTML = `<sub><i>${prod.Cant.toFixed(1)} ${prod.Unid} (${(prod.Cant * 1000)} ${ML})</i></sub>`;
                    if (prod.Down == false) {
                        if (prod.Cant != 1) {
                            pEquiv.innerHTML = `<sub><i>${(prod.Price / prod.Cant).toFixed(2)} cup/${LT} - </i></sub>`;
                        }
                        pEquiv.innerHTML += `<sub><i>${(prod.Price / (prod.Cant * 1000)).toFixed(2)} cup/${ML}</i></sub>`;
                    } else {
                        if (prod.Cant != 1) {
                            pEquiv.innerHTML = `<sub><i>${(prod.DPrice / prod.Cant).toFixed(2)} cup/${LT} - </i></sub>`;
                        }
                        pEquiv.innerHTML = `<sub><i>${(prod.DPrice / (prod.Cant * 1000)).toFixed(2)} cup/${ML}</i></sub>`;
                    }
                }
                // Boton de compra :::
                let buttonBuy = document.createElement('button');
                buttonBuy.innerHTML = "<b>+</b> Agregar producto al carrito";
                // Funcion del boton de compra.
                buttonBuy.addEventListener('click', () => {
                    if (prod.Down == true) {
                        BuyListClient.push(
                            `[${BuyListClient.length + 1}].[CODE](${prod.Code}).[NAME](${prod.Name}).[CANT](${prod.Cant}${prod.Unid}).[PRICE](${prod.DPrice}cup).[COI](${prod.Country}).[REBAJA]\n`
                        );
                        TotalBuyCost += prod.DPrice;
                    } else {
                        BuyListClient.push(
                            `[${BuyListClient.length + 1}].[CODE](${prod.Code}).[NAME](${prod.Name}).[CANT](${prod.Cant}${prod.Unid}).[PRICE](${prod.Price}cup).[COI](${prod.Country}).[Normal]\n`
                        );
                        TotalBuyCost += prod.Price;
                    }
                    BuycarCount.innerHTML = (BuyListClient.length.toString());
                    let listElement = document.createElement('li');
                    if (prod.Down == false) {
                        listElement.innerHTML = `<i>${prod.Name.substring(0, (38 - prod.Price.toFixed(2).toString().length - 4))} ${prod.Price.toFixed(2)}cup</i>`;
                    } else {
                        listElement.innerHTML = `<i>${prod.Name.substring(0, (38 - prod.DPrice.toFixed(2).toString().length - 4))} ${prod.DPrice.toFixed(2)}cup</i>`;
                    }
                    let buttonDeleteProd = document.createElement('button');
                    buttonDeleteProd.classList.add('cancel-bbt');
                    buttonDeleteProd.innerHTML = "<b>x</b>";
                    listElement.appendChild(buttonDeleteProd);
                    ListProdEnc.appendChild(listElement);
                    TotalComp.innerHTML = `<b>TOTAL: ${TotalBuyCost.toFixed(2)} cup </b>`;
                    // funcion de eliminar un producto.
                    buttonDeleteProd.addEventListener('click', () => { });
                });
                // Agreagamos los elementos :::
                pInfo.appendChild(pName);
                pInfo.appendChild(pPrice);
                pInfo.appendChild(pCant);
                pInfo.appendChild(pEquiv);
                pInfo.appendChild(buttonBuy);
                pDiv.appendChild(pImg);
                if (prod.Down == true) { pDiv.appendChild(pDown); }
                pDiv.appendChild(pInfo);
                ProductList.appendChild(pDiv);
            }
        }
    });
});
// lista de constantes :::
const KG = "kg";  // Kilogramo
const LB = "lb";  // Libras
const L = "L";   // Litro
const ML = "ml";  // mililitro

// lista de paises :::
const BRASIL = "bra";
const CUBA = "cub";
const ESPANA = "esp";

document.addEventListener('DOMContentLoaded', function () {
    const Product = [
        {
            Name: "Aceite de girasol",
            Cant: 1,
            Unid: L,
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
            Name: "Refresco de mate",
            Cant: 1.5,
            Unid: L,
            Code: "D001",
            Price: 550.00,
            Country: CUBA,
            DPrice: 0.00,
            Down: false,
            Stock: true
        }
    ];
    const ProductList = document.getElementById('product-list');
    Product.forEach(prod => {
        if (prod.Stock == true) {
            if (prod.Down == false || (prod.Down == true && prod.DPrice > 0)) {
                let pDiv = document.createElement('div');
                pDiv.classList.add('product');
                let pImg = document.createElement('img');
                pImg.classList.add("img_product");
                pImg.src = `res/${prod.Code}.webp`;
                pImg.alt = `imagen de ${prod.Name}`;
                /*let pDown;
                if (prod.Down == true) {
                    pDown = document.createElement('img');
                    pDown.classList.add("down_img");
                    pDown.src = 'res/down.webp';
                    pDown.alt = 'rebaja';
                }*/
                let pInfo = document.createElement('div');
                let pName = document.createElement('h3');
                pName.innerHTML = prod.Name;
                let pPrice = document.createElement('p');
                if (prod.Down == false) {
                    pPrice.innerHTML = `<b>${prod.Price.toFixed(2)} cup</b>  `;
                } else {
                    pPrice.innerHTML = `<b><s>${prod.Price.toFixed(2)} cup</s> ${prod.DPrice.toFixed(2)} cup</b>  `;
                }
                let pContry = document.createElement('img');
                pContry.classList.add("flag_country");
                pContry.src = `res/${prod.Country}.webp`;
                pContry.alt = `${prod.Country}`;
                pPrice.appendChild(pContry);
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
                } else if (prod.Unid == L) {
                    pCant.innerHTML = `<sub><i>${prod.Cant.toFixed(1)} ${prod.Unid} (${(prod.Cant * 1000)} ${ML})</i></sub>`;
                    if (prod.Down == false) {
                        if (prod.Cant != 1) {
                            pEquiv.innerHTML = `<sub><i>${(prod.Price / prod.Cant).toFixed(2)} cup/${L} - </i></sub>`;
                        }
                        pEquiv.innerHTML += `<sub><i>${(prod.Price / (prod.Cant * 1000)).toFixed(2)} cup/${ML}</i></sub>`;
                    } else {
                        if (prod.Cant != 1) {
                            pEquiv.innerHTML = `<sub><i>${(prod.DPrice / prod.Cant).toFixed(2)} cup/${L} - </i></sub>`;
                        }
                        pEquiv.innerHTML = `<sub><i>${(prod.DPrice / (prod.Cant * 1000)).toFixed(2)} cup/${ML}</i></sub>`;
                    }
                }
                let buttonBuy = document.createElement('button');
                buttonBuy.textContent = "+ Agregar producto al carrito";

                pInfo.appendChild(pName);
                pInfo.appendChild(pPrice);
                pInfo.appendChild(pCant);
                pInfo.appendChild(pEquiv);
                pInfo.appendChild(buttonBuy);
                pDiv.appendChild(pImg);
                pDiv.appendChild(pInfo);
                ProductList.appendChild(pDiv);
            }
        }
    });
});
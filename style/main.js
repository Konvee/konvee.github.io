// lista de constantes :::
const KG = "kg";
const LB = "lb";

// lista de paises :::
const BRASIL = "bra"

document.addEventListener('DOMContentLoaded', function () {
    const Product = [
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
                        pEquiv.innerHTML = `<sub><i>${(prod.Price / prod.Cant).toFixed(2)} cup/${KG} - ${(prod.Price / (prod.Cant * 2.2)).toFixed(2)} cup/${LB}</i></sub>`;
                    } else {
                        pEquiv.innerHTML = `<sub><i>${(prod.DPrice / prod.Cant).toFixed(2)} cup/${KG} - ${(prod.DPrice / (prod.Cant * 2.2)).toFixed(2)} cup/${LB}</i></sub>`;
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
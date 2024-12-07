import { game } from "./data.js";
console.log(game);

fetch("https://6754543236bcd1eec850d9a5.mockapi.io/api/v1/game")
  .then((response) => response.json())

  .then((data) => {
    console.log(data);
    // productData = data;
    const move = document.querySelector(".mid");

    console.log(game);
    const bone = document.createElement("div");
    // productList.className = "product-list"
    bone.classList.add("bone");
    console.log(bone);
    move.insertAdjacentElement("beforeend", bone);
    console.log(move);

    game.forEach((game) => {
      const templates = `
        <div class="game">
            <img src="${game.gameArt}" alt="">
            <div class="info">
                <h1>${game.gameName}</h1>
                <p>THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.</p>
                <div class="art">
                    <img src="${game.gameArt1}" alt="">
                    <img src="${game.gameArt2}" alt="">
                </div>
                <div class="art">
                    <img src="${game.gameArt3}" alt="">
                    <img src="${game.gameArt4}" alt="">
                </div>
                                
                <div class="type">
                    <div class="more">
                        <p>Souls-like</p>
                        <p>RPG</p>
                        <p>Dark Fantasy</p>
                        <p>Open World</p>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                     <div class="window">
                        <img src="./img/Windows8.png" alt="">
                    </div>
                </div>
                                
                <div class="wishlist">
                    <div class="wishlist-a">
                        <p>wishlist</p>
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class="price">
                        <span>$${game.gamePrice}</span>
                        <a href="">Buy Now</a>
                     </div>
                </div>
            </div>
         </div>
    `;

      bone.insertAdjacentHTML("beforeend", templates);
    });

    const btnSliderNext = document.querySelector(".btn-slider-next");
    const btnSliderPrev = document.querySelector(".btn-slider-prev");

    const candy = document.querySelectorAll(".another-game .candy");
    let currLocation = 0; //Vị trí ban đầu
    btnSliderNext.addEventListener("click", () => {
      if (currLocation >= candy.length - 1) return;
      currLocation++;
      bone.style.marginLeft = `calc(-1200px * ${currLocation})`;

      candy.forEach((item) => {
        item.classList.remove("nav");
      });
      candy[currLocation].classList.add("nav");
    });

    btnSliderPrev.addEventListener("click", () => {
      if (currLocation <= 0) return;
      currLocation--;

      bone.style.marginLeft = `calc(-1200px * ${currLocation})`;

      candy.forEach((item) => {
        item.classList.remove("nav");
      });
      candy[currLocation].classList.add("nav");
    });
  });

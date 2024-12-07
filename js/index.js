import { game } from "./data.js"; 

fetch("https://6753bb73f3754fcea7bc56af.mockapi.io/Steam")
.then(response => response.json())
  .then((data) => {
    // productData = data;
    const game = document.querySelector(".game");

    console.log(game);
    const bone = document.createElement("div");
    // productList.className = "product-list"
    bone.classList.add("bone");
    console.log(productList);
    game.insertAdjacentElement("beforeend", bone);
    
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
    
      productList.insertAdjacentHTML("beforeend", templates);
    });
    
    const productBtn = document.querySelectorAll(".product-btn");
    let count = 0;
    productBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        count++;
        if (count > 0) {
          const headerQuantity = document.querySelector(".header-quantity");
          headerQuantity.style.display = "flex";
          if (count < 100) {
            headerQuantity.textContent = count;
          } else {
            headerQuantity.textContent = "99+";
          }
        }
      });
    });})
  .catch((err) => {
    //rejected
    console.log(err);
});









//  var count = 0;
//         var inc = 0;
//         var margin = 0;
//         var slider = document.getElementsByClassName("slider-width")[0];
//         var itemDisplay = 0;
//         if(screen.width > 990){
//             itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-d");
//             margin = itemDisplay * 5;
//         }
//         if(screen.width > 700 && screen.width < 990){
//             itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-t");
//             console.log(itemDisplay);
//             margin = itemDisplay * 6.8;
//         }
//         if(screen.width > 280 && screen.width < 700){
//             itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-m");
//             margin = itemDisplay * 20;

//         }

//         var item = document.getElementsByClassName("item");
//         var itemLeft = item.length % itemDisplay;
//         var itemSlide = Math.floor(item.length / itemDisplay) - 1;  
//         for (let i = 0; i < item.length; i++){
//             item[i].style.width = (screen.width / itemDisplay) - margin + "px";
//         };
        
//         function next() {
//             if (inc !== itemSlide + itemLeft){
//                 if(inc === itemSlide){
//                     inc = inc + itemLeft;
//                     count = count - (screen.width / itemDisplay) * itemLeft;
//                 }   else {
//                     inc ++;
//                     count = count - screen.width;
//                 }
//             };
//             slider.style.left = count + "px";
//         };

//         function prev(){
//             if (inc !== 0){
//                 if(inc === itemLeft){
//                     inc = inc - itemLeft;
//                     count = count + (screen.width / itemDisplay) * itemLeft;
//                 } else {
//                     inc --;
//                     count = count + screen.width;
//                 };
//             };
//             slider.style.left = count + "px";
// };


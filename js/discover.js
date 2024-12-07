import { game } from "./data.js"; 
console.log(game);

fetch("https://6754543236bcd1eec850d9a5.mockapi.io/api/v1/game")
.then(response => response.json())


  .then((data) => {
    console.log(data);
    // productData = data;
    const main = document.querySelector(".main");

    console.log(main);
    const info = document.createElement("div");
    // productList.className = "product-list"
    info.classList.add("huhu");
    console.log(info);
    main.insertAdjacentElement("beforeend", info);
    console.log(main);
    
    
    game.forEach((game) => {  
      const templates = `
        <div class="nah">
                <div class="padding">
                    <div class="heh">
                        <img src="${game.gameArt}" alt="">
                        <div class="info-game">
                            <div class="art-game">
                                <img src="${game.gameArt1}" alt="">
                                <img src="${game.gameArt2}" alt="">
                                <img src="${game.gameArt3}" alt="">
                            </div>
                        </div>
                    </div>
                    <div id="info">
                        <div id="info-game">
                            <div class="huh">
                                <div id="title">
                                    <div>
                                        <h1>${game.gameName}</h1>
                                    </div>
                                </div>
                                    <p>Since you played <a href="https://store.steampowered.com/app/374320/DARK_SOULS_III/?l=vietnamese"><span>Dark Souls III</span></a></p>
                            </div>
                            
                            <div class="primary-info">
                                <div id="more">
                                    <p>Souls-like</p>
                                    <p>RPG</p>
                                    <p>Dark Fantasy</p>
                                    <p>Open World</p>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                            </div>
                        </div>
                        <div id="logo">
                            <i class="fa-brands fa-windows"></i>
                            <i class="fa-brands fa-apple"></i>
                            <i class="fa-brands fa-steam"></i>
                            <p>Aug 21, 2021</p>
                        </div>
                        <div class="emotion">
                            <div class="like">
                                <p>90%</p>
                                <i class="fa-solid fa-thumbs-up"></i>
                            </div>
                            <div class="dislike">
                                <p>10%</p>
                                <i class="fa-solid fa-thumbs-down"></i>
                            </div>
                        </div>
                        <div class="bar">
                            <div class="blue"></div>
                            <div class="red"></div>
                            <p>25,753 User Reviews</p>
                        </div>
                        <div class="no">
                            <p>Find more like this</p>
                        </div>

                    </div>
                    <div>
                        <div id="right">
                            <div id="ignore">Ignore</div>
                            <div id="wishlist">Wishlist</div>
                        </div>
                        <div>
                            <div class="end">
                                <p>Until July 13</p>
                                <div class="sale">-30%</div>
                                <div class="price">
                                    <div class="line"></div>
                                    <ul>
                                        <li>$${game.gamePrice}</li>
                                        <li>$41.99</li>
                                    </ul>
                                    <span>Visit Store Page</span>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
    `;
    
      info.insertAdjacentHTML("beforeend", templates);
    });
  });
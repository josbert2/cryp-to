import React, { Component } from "react";



class Home extends Component {
   render() {
      return (
         <div>
            <div data-scroll-container >
               <div data-scroll>
                  <section data-scroll-section></section>
                  <section class="gallery" data-scroll-section id="pin" style={{ paddingTop: "70px" }}>
                     <div class="containerwebgl">
                           <div class="contentwebgl">
                              <div class="content-stat d-flex flex-column text-align-left">
                                 <span>MARKET CAP</span>
                                 <div class="d-flex">
                                       $1,464,925,068,994
                                       <div class="d-flex danger-svg" style={{ color: "#ff7675", fill: "#ff7675" }}>
                                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                             <path d="M0 0h24v24H0V0z" fill="none"></path>
                                             <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                          </svg>
                                          3.6%
                                       </div>
                                 </div>
                              </div>
                              <div class="content-stat d-flex flex-column text-align-left">
                                 <span>VOLUME 24H</span>
                                 <div class="d-flex">
                                       $1,464,925,068,994
                                       <div class="d-flex danger-svg" style={{ color: "#ff7675", fill: "#ff7675" }}>
                                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                             <path d="M0 0h24v24H0V0z" fill="none"></path>
                                             <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                          </svg>
                                          3.6%
                                       </div>
                                 </div>
                              </div>
                              <div class="content-stat d-flex flex-column text-align-left">
                                 <span>BTC DOMINANCE</span>
                                 <div class="d-flex">
                                       $1,464,925,068,994
                                       <div class="d-flex danger-svg" style={{ color: "#ff7675", fill: "#ff7675" }}>
                                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                             <path d="M0 0h24v24H0V0z" fill="none"></path>
                                             <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                          </svg>
                                          3.6%
                                       </div>
                                 </div>
                              </div>
                           </div>
                     </div>
                     <div class="container">
                           <div class="container-tabs">
                              <div class="item-wrapper__tab active"><span>Coins</span></div>
                              <div class="item-wrapper__tab"><span>Recently Added</span></div>
                              <div class="item-wrapper__tab"><span>Large Movers</span></div>
                              <div class="item-wrapper__tab"><span>Categories</span></div>
                           </div>
                           <div class="d-flex align-items-center centralize">
                              <h2 style={{ margin: 0 }}>Las 100 principales monedas según la capitalización de mercado</h2>
                              <div class="ml-auto"><input class="ios-switch --dark" type="checkbox" checked="" /></div>
                           </div>
                           <div class="filters-container d-flex align-items-center">
                              <div class="item__filter"><span>USD</span></div>
                              <div class="item__filter"><span>Todas las categorias</span></div>
                              <div class="item__filter"><span>Filtro</span></div>
                              <div class="d-flex align-items-center ml-auto">
                                 <div class="select-length">
                                       Resultado por paginas
                                       <select>
                                          <option value="">20</option>
                                          <option value="">40</option>
                                       </select>
                                 </div>
                                 <div class="pagination-table">
                                       <div class="prev-table item-c">
                                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                             <path d="M0 0h24v24H0V0z" fill="none"></path>
                                             <path d="M14.71 6.71c-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z"></path>
                                          </svg>
                                       </div>
                                       <div class="next-table item-c">
                                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                             <path d="M0 0h24v24H0V0z" fill="none"></path>
                                             <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path>
                                          </svg>
                                       </div>
                                 </div>
                              </div>
                           </div>
                           <div class="balances">
                              <div class="balances__table small">
                                 <div class="balances__row balances__row_head">
                                       <div class="balances__cell">#</div>
                                       <div class="balances__cell">Moneda</div>
                                       <div class="balances__cell">Precio</div>
                                       <div class="balances__cell">1 h</div>
                                       <div class="balances__cell">24 h</div>
                                       <div class="balances__cell">7 d</div>
                                       <div class="balances__cell">Volumen en 24 h</div>
                                       <div class="balances__cell">Cap. de mercado</div>
                                       <div class="balances__cell">Últimos 7 días</div>
                                       <div class="balances__cell">
                                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                             <path d="M0 0h24v24H0V0z" fill="none" />
                                             <path
                                                   d="M4 18h4c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm1 6h10c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1z"
                                             />
                                          </svg>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>1</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex danger-svg" style={{ color: "#ff7675", fill: "#ff7675" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                             </svg>
                                             3.6%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>2</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex success-svg" style={{ color: "#55efc4" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 12.29L11.3 9.7c.39-.39 1.02-.39 1.41 0l2.59 2.59c.63.63.18 1.71-.71 1.71H9.41c-.89 0-1.33-1.08-.7-1.71z"></path>
                                             </svg>
                                             4.2%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>3</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex success-svg" style={{color: "#55efc4" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 12.29L11.3 9.7c.39-.39 1.02-.39 1.41 0l2.59 2.59c.63.63.18 1.71-.71 1.71H9.41c-.89 0-1.33-1.08-.7-1.71z"></path>
                                             </svg>
                                             4.9%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>4</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex danger-svg" style={{ color: "#ff7675", fill: "#ff7675" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                             </svg>
                                             0.2%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>5</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex danger-svg" style={{ color: "#ff7675", fill: "#ff7675" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                             </svg>
                                             1.6%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>6</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex danger-svg" style={{ color: "#ff7675", fill: "#ff7675" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                             </svg>
                                             4.2%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>7</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex success-svg" style={{ color: "#55efc4" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 12.29L11.3 9.7c.39-.39 1.02-.39 1.41 0l2.59 2.59c.63.63.18 1.71-.71 1.71H9.41c-.89 0-1.33-1.08-.7-1.71z"></path>
                                             </svg>
                                             0.4%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>8</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex danger-svg" style={{ color: "#ff7675", fill: "#ff7675" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                             </svg>
                                             2.2%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>9</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex success-svg" style={{ color: "#55efc4" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 12.29L11.3 9.7c.39-.39 1.02-.39 1.41 0l2.59 2.59c.63.63.18 1.71-.71 1.71H9.41c-.89 0-1.33-1.08-.7-1.71z"></path>
                                             </svg>
                                             2.5%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>10</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex danger-svg" style={{ color: "#ff7675", fill: "#ff7675" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                             </svg>
                                             2.5%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>11</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex danger-svg" style={{ color: "#ff7675", fill: "#ff7675" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                             </svg>
                                             3.3%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>12</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex success-svg" style={{ color: "#55efc4" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 12.29L11.3 9.7c.39-.39 1.02-.39 1.41 0l2.59 2.59c.63.63.18 1.71-.71 1.71H9.41c-.89 0-1.33-1.08-.7-1.71z"></path>
                                             </svg>
                                             0.3%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>13</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex danger-svg" style={{ color: "#ff7675", fill: "#ff7675" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                             </svg>
                                             1.3%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>14</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex danger-svg" style={{ color: "#ff7675", fill: "#ff7675" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                             </svg>
                                             0.1%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>15</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex danger-svg" style={{ color: "#ff7675", fill: "#ff7675" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                             </svg>
                                             1%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>16</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex danger-svg" style={{ color: "#ff7675", fill: "#ff7675" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                             </svg>
                                             0.2%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>17</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex danger-svg" style={{ color: "#ff7675", fill: "#ff7675" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                             </svg>
                                             1.7%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>18</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex danger-svg" style={{ color: "#ff7675", fill: "#ff7675" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                             </svg>
                                             0.2%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>19</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex success-svg" style={{ color: "#55efc4" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 12.29L11.3 9.7c.39-.39 1.02-.39 1.41 0l2.59 2.59c.63.63.18 1.71-.71 1.71H9.41c-.89 0-1.33-1.08-.7-1.71z"></path>
                                             </svg>
                                             5%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>20</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex danger-svg" style={{ color: "#ff7675", fill: "#ff7675" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                             </svg>
                                             0.2%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>21</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex danger-svg" style={{ color: "#ff7675", fill: "#ff7675" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                             </svg>
                                             2.7%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>22</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex danger-svg" style={{ color: "#ff7675", fill: "#ff7675" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                             </svg>
                                             1.3%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>23</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex danger-svg" style={{ color: "#ff7675", fill: "#ff7675" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                             </svg>
                                             4.1%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>24</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex danger-svg" style={{ color: "#ff7675", fill:"#ff7675" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                             </svg>
                                             0.4%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>25</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex danger-svg" style={{ color: "#ff7675", fill: "#ff7675"}}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                             </svg>
                                             3.5%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop:"5px" }}>26</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex success-svg" style={{ color: "#55efc4" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 12.29L11.3 9.7c.39-.39 1.02-.39 1.41 0l2.59 2.59c.63.63.18 1.71-.71 1.71H9.41c-.89 0-1.33-1.08-.7-1.71z"></path>
                                             </svg>
                                             2.8%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop:"5px" }}>27</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex danger-svg" style={{ color: "#ff7675", fill: "#ff7675" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                             </svg>
                                             1.1%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop:"5px" }}>28</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex danger-svg" style={{ color: "#ff7675", fill: "#ff7675" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                             </svg>
                                             1.3%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                                 <div class="balances__row">
                                       <div class="balances__cell">
                                          <div class="d-flex align-items-center">
                                             <span class="m-r-10" style={{ marginRight: "10px", paddingTop: "5px" }}>29</span>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path
                                                      d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
                                                   ></path>
                                             </svg>
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__company">
                                             <div class="balances__logo"><img src="https://ui8-unity-exchange.herokuapp.com/img/logo/bitcoin.png" /></div>
                                             <div class="balances__text">ethereum</div>
                                          </div>
                                       </div>
                                       <div class="balances__cell">BTC</div>
                                       <div class="balances__cell">
                                          <div class="d-flex danger-svg" style={{ color: "#ff7675", fill: "#ff7675" }}>
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                                             </svg>
                                             3.6%
                                          </div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">19,266.6454898</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">357,466,449,337</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="balances__number">$49,046,886,271</div>
                                          <div class="balances__price">$2,134.325</div>
                                       </div>
                                       <div class="balances__cell d-flex align-items-center">
                                          <div class="" id=""><img src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png" /></div>
                                       </div>
                                       <div class="balances__cell">
                                          <div class="passive-hover">
                                             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                   <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                   <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                             </svg>
                                          </div>
                                       </div>
                                 </div>
                              </div>
                           </div>
                     </div>
                     <br />
                     <br />
                  </section>
               </div>
               
            </div>
         </div>
      )
   }
}

export default Home;

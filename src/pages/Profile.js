import React, { Component } from "react";
import { Line } from 'react-chartjs-2';
const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Cap',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
class Profile extends Component {
    render() {
        return (

                <div data-scroll-container style={{zIndex: "1",margin: "0 auto",width: "100%"}}>
                    <div data-scroll>
                        <section data-scroll-section>
                            
                        </section>
                        
                        <section class="gallery " data-scroll-section id="pin" style={{ paddingTop: "70px"}}>
                            <div class="container">
                                <div class="m-b-200">
                                    
                                    
                                    <div class="breadcrumb">
                                        <a href="/es">Monedas</a>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"/></svg>
                                        <span>Ethereum</span>
                                    </div>
                                    <div class="d-flex ">
                                        <div class="" style={{ flex: "1 1 70%",paddingRight: "40px" }}>
                                            <div class="d-flex mb-3">
                                                <div class="coin-img-rounder">
                                                    <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png" alt="" />
                                                    <span>Ethereum</span>
                                                </div>
                                                <div class="ml-auto d-flex flex-column">
                                                    <div class="h2-price">
                                                        <div class="">
                                                            
                                                            <span>1943,34 US$</span>
                                                        </div>
                                                        
                                                    </div>
                                                    <span class="text-danger exchange-price ml-auto">
                                                        -4.8%
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="d-flex mb-4 align-items-center">
                                                <div class="ranking-total d-flex align-items-center">
                                                    <svg class="svg" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><path d="M17,10.43V3c0-0.55-0.45-1-1-1H8C7.45,2,7,2.45,7,3v7.43c0,0.35,0.18,0.68,0.49,0.86l4.18,2.51l-0.99,2.34l-2.22,0.19 C8,16.37,7.82,16.92,8.16,17.21l1.69,1.46l-0.51,2.18c-0.1,0.43,0.37,0.77,0.75,0.54L12,20.23l1.91,1.15 c0.38,0.23,0.85-0.11,0.75-0.54l-0.51-2.18l1.69-1.46c0.33-0.29,0.16-0.84-0.29-0.88l-2.22-0.19l-0.99-2.34l4.18-2.51 C16.82,11.11,17,10.79,17,10.43z M13,12.23l-1,0.6l-1-0.6V3h2V12.23z"/></g></svg>
                                                    <span class="text-white">Rank 2</span>
                                                </div>
                                                <span class="text-white" style={{margin: "0 10px"}}>-</span>
                                                <div class="text-white">
                                                    A 532.054 personas les gusta esto
                                                </div>
                                            </div>
                                            <div class=" grid-2">
                                                <div class="content-stat ">
                                                    <div class="content-header">
                                                        Capitalización de mercado 
                                                    </div>
                                                    <div class="content-body">
                                                        227.234.656.364 US$
            
                                                    </div>
                                                </div>
                                                <div class="content-stat ">
                                                    <div class="content-header">
                                                        Volumen de comercio en 24 horas
                                                    </div>
                                                    <div class="content-body">
                                                        18.150.850.879 US$
                                                    </div>
                                                </div>
                                                <div class="content-stat ">
                                                    <div class="content-header">
                                                        Cantidad circulante
                                                    </div>
                                                    <div class="content-body">
                                                        116.681.274
                                                    </div>
                                                </div>
                                                <div class="content-stat">
                                                    <div class="content-header">
                                                        Total Supply
                                                    </div>
                                                    <div class="content-body">
                                                        ∞
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="m-t-20">
                                                <div class="content-stat d-flex justify-content-center align-items-center">
                                                    <div class="d-flex align-items-center">
                                                        <span class="coin-bg">ETH</span>
                                                        <input type="text" class="input-default" />
                                                    </div>
                                                    <span style={{ margin: "0 20px" }}>-</span>
                                                    <div class="d-flex align-items-center">
                                                        <span class="coin-bg">USB</span>
                                                        <input type="text" class="input-default" />
                                                    </div>
                                                </div>
                                                <div class="mt-6">
                                                    <button class="bg-indigo-500 p-3 rounded w-52 text-center text-white">exchange</button>
                                                </div>
                                            </div>
                                            <div class="m-t-20">
                                              
                                                    <div class="filters-container d-flex align-items-center sliders" >
                                                        <div class="item__filter open" style={{ transitionDelay: "0s" }}>
                                                            <span>Panorama</span>
                                                        </div>
                                                        <div class="item__filter open" style={{ transitionDelay: "0.09s" }}>
                                                            <span>Mercado</span>
                                                        </div>
                                                        
                                                       
                                
                                                    </div>
                                             
                                              
                                            </div>
                                        </div>
                                        <div class="ml-auto"  style={{ flex: "1 1 30%" }}>
                                            <div class="d-flex justify-content-end">
                                                <a href="" class="container-without-svg hov" data-tippy-content="Favorito">
                                                    <svg class="svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                                                </a>
                                                <div class="container-svg hov" data-tippy-content="Compartir">
                                                    <svg class="svg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/></svg>
                                                </div>
                                            </div>
                                            <div class="m-t-20">
                                                <div class="grid-2">
                                                    <button class="acciones-crypto bg-light-primary text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.42 0 2.13.54 2.39 1.4.12.4.45.7.87.7h.3c.66 0 1.13-.65.9-1.27-.42-1.18-1.4-2.16-2.96-2.54V4.5c0-.83-.67-1.5-1.5-1.5S10 3.67 10 4.5v.66c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-1.65 0-2.5-.59-2.83-1.43-.15-.39-.49-.67-.9-.67h-.28c-.67 0-1.14.68-.89 1.3.57 1.39 1.9 2.21 3.4 2.53v.67c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-.65c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
                                                        Comprar / Vender
                                                    </button>
                                                    <button class="acciones-crypto bg-light-primary text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M20,4H4C2.89,4,2.01,4.89,2.01,6L2,18c0,1.11,0.89,2,2,2h16c1.11,0,2-0.89,2-2V6C22,4.89,21.11,4,20,4z M11,10H8v1h3 c0.55,0,1,0.45,1,1v3c0,0.55-0.45,1-1,1h-1v0c0,0.55-0.45,1-1,1h0c-0.55,0-1-0.45-1-1v0H7c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1 h3v-1H7c-0.55,0-1-0.45-1-1V9c0-0.55,0.45-1,1-1h1v0c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v0h1c0.55,0,1,0.45,1,1v0 C12,9.55,11.55,10,11,10z M15.65,15.9L14,14.25h4l-1.65,1.65C16.16,16.09,15.84,16.09,15.65,15.9z M14,10l1.65-1.65 c0.2-0.2,0.51-0.2,0.71,0L18,10H14z"/></g></svg>
                                                        Alcista / Bajista
                                                    </button>
                                                    <button class="acciones-crypto bg-light-primary text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/><path d="M19.41,7.41l-4.83-4.83C14.21,2.21,13.7,2,13.17,2H6C4.9,2,4.01,2.9,4.01,4L4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2 V8.83C20,8.3,19.79,7.79,19.41,7.41z M14,13c0.55,0,1,0.45,1,1v3c0,0.55-0.45,1-1,1h-1c0,0.55-0.45,1-1,1s-1-0.45-1-1h-1 c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h3v-1h-3c-0.55,0-1-0.45-1-1v-3c0-0.55,0.45-1,1-1h1c0-0.55,0.45-1,1-1s1,0.45,1,1h1 c0.55,0,1,0.45,1,1c0,0.55-0.45,1-1,1h-3v1H14z M14,8c-0.55,0-1-0.45-1-1V3.5L17.5,8H14z"/></g></svg>
                                                        Ganancia / Préstamo
                                                    </button>
                                                    <button class="acciones-crypto bg-light-primary text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.39 1.4-4.46 3.43-5.42.34-.16.57-.47.57-.84v-.19c0-.68-.71-1.11-1.32-.82C2.92 5.99 1 8.77 1 12s1.92 6.01 4.68 7.27c.61.28 1.32-.14 1.32-.82v-.18c0-.37-.23-.69-.57-.85C4.4 16.46 3 14.39 3 12z"/></svg>
                                                        Collect NFT
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="content-stat m-t-20 no-before">
                                                <div class="coin-link-row tw-mb-0 d-flex flex-column ">
                                                    <span class="tw-min-w-3/10 2xl:tw-min-w-1/4 tw-text-gray-500 dark:tw-text-gray-400 tw-mr-2">Sitio web</span>
                                                    <div class="tw-flex flex-wrap tw-font-normal  m-t-20">
                                                    <a target="_blank" rel="nofollow noopener" class="tw-px-2.5 tw-py-1 tw-my-0.5 tw-mr-1 tw-rounded-md tw-text-sm tw-font-medium tw-bg-gray-100 tw-text-gray-800 hover:tw-bg-gray-200 dark:tw-text-white dark:tw-bg-gray-600 dark:tw-bg-opacity-60 dark:hover:tw-bg-gray-500 dark:focus:tw-bg-gray-500 " href="https://www.ethereum.org/">ethereum.org</a>
                                                    </div>
                                                </div>
                                                <div class="coin-link-row tw-mb-0 d-flex flex-column">
                                                    <span class="tw-min-w-3/10 2xl:tw-min-w-1/4 tw-text-gray-500 dark:tw-text-gray-400 tw-mr-2">Exploradores</span>
                                                    <div class="tw-flex flex-wrap tw-font-normal m-t-20">
                                                    <a target="_blank" rel="nofollow noopener" 
                                                    class="tw-px-2.5 tw-py-1 tw-my-0.5 tw-mr-1 tw-rounded-md tw-text-sm tw-font-medium tw-bg-gray-100 tw-text-gray-800 hover:tw-bg-gray-200 dark:tw-text-white dark:tw-bg-gray-600 dark:tw-bg-opacity-60 dark:hover:tw-bg-gray-500 dark:focus:tw-bg-gray-500 " href="https://www.ethereum.org/">ethereum.org</a>
                                                    <a target="_blank" rel="nofollow noopener" 
                                                    class="tw-px-2.5 tw-py-1 tw-my-0.5 tw-mr-1 tw-rounded-md tw-text-sm tw-font-medium tw-bg-gray-100 tw-text-gray-800 hover:tw-bg-gray-200 dark:tw-text-white dark:tw-bg-gray-600 dark:tw-bg-opacity-60 dark:hover:tw-bg-gray-500 dark:focus:tw-bg-gray-500 " href="https://www.ethereum.org/">Ethplorer</a>
                                                    <a target="_blank" rel="nofollow noopener" 
                                                    class="tw-px-2.5 tw-py-1 tw-my-0.5 tw-mr-1 tw-rounded-md tw-text-sm tw-font-medium tw-bg-gray-100 tw-text-gray-800 hover:tw-bg-gray-200 dark:tw-text-white dark:tw-bg-gray-600 dark:tw-bg-opacity-60 dark:hover:tw-bg-gray-500 dark:focus:tw-bg-gray-500 " href="https://www.ethereum.org/">Blockhair</a>
                                                    </div>
                                                </div>
                                                <div class="coin-link-row tw-mb-0 d-flex flex-column">
                                                    <span class="tw-min-w-3/10 2xl:tw-min-w-1/4 tw-text-gray-500 dark:tw-text-gray-400 tw-mr-2">Monederos</span>
                                                    <div class="tw-flex flex-wrap tw-font-normal m-t-20">
                                                    <a target="_blank" rel="nofollow noopener" 
                                                    class="tw-px-2.5 tw-py-1 tw-my-0.5 tw-mr-1 tw-rounded-md tw-text-sm tw-font-medium tw-bg-gray-100 tw-text-gray-800 hover:tw-bg-gray-200 dark:tw-text-white dark:tw-bg-gray-600 dark:tw-bg-opacity-60 dark:hover:tw-bg-gray-500 dark:focus:tw-bg-gray-500 " href="https://www.ethereum.org/">Crypto.com - DeFi Wallet</a>
                                                    <a target="_blank" rel="nofollow noopener" 
                                                    class="tw-px-2.5 tw-py-1 tw-my-0.5 tw-mr-1 tw-rounded-md tw-text-sm tw-font-medium tw-bg-gray-100 tw-text-gray-800 hover:tw-bg-gray-200 dark:tw-text-white dark:tw-bg-gray-600 dark:tw-bg-opacity-60 dark:hover:tw-bg-gray-500 dark:focus:tw-bg-gray-500 " href="https://www.ethereum.org/">Ledger</a>
                                                    <a target="_blank" rel="nofollow noopener" 
                                                    class="tw-px-2.5 tw-py-1 tw-my-0.5 tw-mr-1 tw-rounded-md tw-text-sm tw-font-medium tw-bg-gray-100 tw-text-gray-800 hover:tw-bg-gray-200 dark:tw-text-white dark:tw-bg-gray-600 dark:tw-bg-opacity-60 dark:hover:tw-bg-gray-500 dark:focus:tw-bg-gray-500 " href="https://www.ethereum.org/">Trezor</a>
                                                    </div>
                                                </div>
                                            </div>
            
                                            <div class="content-stat m-t-20 no-before  grid-2">
                                                <div class="coin-link-row tw-mb-0 d-flex flex-column ">
                                                    <span class="tw-min-w-3/10 2xl:tw-min-w-1/4 tw-text-gray-500 dark:tw-text-gray-400 tw-mr-2">Comunidad</span>
                                                    <div class="tw-flex flex-wrap tw-font-normal  m-t-20">
                                                    <a target="_blank" rel="nofollow noopener" class="tw-px-2.5 tw-py-1 tw-my-0.5 tw-mr-1 tw-rounded-md tw-text-sm tw-font-medium tw-bg-gray-100 tw-text-gray-800 hover:tw-bg-gray-200 dark:tw-text-white dark:tw-bg-gray-600 dark:tw-bg-opacity-60 dark:hover:tw-bg-gray-500 dark:focus:tw-bg-gray-500 " href="https://www.ethereum.org/">Facebook</a>
                                                    </div>
                                                </div>
                                                <div class="coin-link-row tw-mb-0 d-flex flex-column">
                                                    <span class="tw-min-w-3/10 2xl:tw-min-w-1/4 tw-text-gray-500 dark:tw-text-gray-400 tw-mr-2">Codigo fuente</span>
                                                    <div class="tw-flex flex-wrap tw-font-normal m-t-20">
                                                    <a target="_blank" rel="nofollow noopener" 
                                                    class="tw-px-2.5 tw-py-1 tw-my-0.5 tw-mr-1 tw-rounded-md tw-text-sm tw-font-medium tw-bg-gray-100 tw-text-gray-800 hover:tw-bg-gray-200 dark:tw-text-white dark:tw-bg-gray-600 dark:tw-bg-opacity-60 dark:hover:tw-bg-gray-500 dark:focus:tw-bg-gray-500 " href="https://www.ethereum.org/">Github</a>
                                           
                                                    </div>
                                                </div>
                                                <div class="coin-link-row tw-mb-0 d-flex flex-column">
                                                    <span class="tw-min-w-3/10 2xl:tw-min-w-1/4 tw-text-gray-500 dark:tw-text-gray-400 tw-mr-2">Api id</span>
                                                    <div class="tw-flex flex-wrap tw-font-normal m-t-20">
                                                    <a target="_blank" rel="nofollow noopener" 
                                                    class="tw-px-2.5 tw-py-1 tw-my-0.5 tw-mr-1 tw-rounded-md tw-text-sm tw-font-medium tw-bg-gray-100 tw-text-gray-800 hover:tw-bg-gray-200 dark:tw-text-white dark:tw-bg-gray-600 dark:tw-bg-opacity-60 dark:hover:tw-bg-gray-500 dark:focus:tw-bg-gray-500 " href="https://www.ethereum.org/">Etherum</a>
                                                    
                                                    </div>
                                                </div>
            
                                                <div class="coin-link-row tw-mb-0 d-flex flex-column">
                                                    <span class="tw-min-w-3/10 2xl:tw-min-w-1/4 tw-text-gray-500 dark:tw-text-gray-400 tw-mr-2">Etiquetas</span>
                                                    <div class="tw-flex flex-wrap tw-font-normal m-t-20">
                                                    <a target="_blank" rel="nofollow noopener" 
                                                    class="tw-px-2.5 tw-py-1 tw-my-0.5 tw-mr-1 tw-rounded-md tw-text-sm tw-font-medium tw-bg-gray-100 tw-text-gray-800 hover:tw-bg-gray-200 dark:tw-text-white dark:tw-bg-gray-600 dark:tw-bg-opacity-60 dark:hover:tw-bg-gray-500 dark:focus:tw-bg-gray-500 " href="https://www.ethereum.org/">Etherum</a>
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            <div class="container">
                                
                                <div class="mb-8" id="default-tab">
                                    <div class="sm:hidden">
                                      <label for="tabs" class="sr-only">Select a tab</label>
                                      <select id="tabs" name="tabs" class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                                        <option selected>My Account</option>
                                  
                                        <option>Company</option>
                                  
                                        <option>Team Members</option>
                                  
                                        <option>Billing</option>
                                      </select>
                                    </div>
                                    <div class="hidden sm:block ">
                                        <nav class="-mb-px flex space-x-8 border-t-2 border-current border-gray-300" aria-label="Tabs" id="tabs">
                                            
                                            <a href="#tab1" data-target="tab1"  class="tabs border-transparent text-gray-200 hover:text-gray-300 hover:border-gray-200 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm">
                                              Panorama
                                            </a>
                                    
                                            <a href="#tab2" data-target="tab2"  class="tabs border-transparent text-gray-200 hover:text-gray-300 hover:border-gray-200 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm">
                                              Mercado
                                            </a>
                                    
                                            <a href="#tab3" data-target="tab3"  class="tabs border-transparent text-gray-200 hover:text-gray-300 hover:border-gray-200 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm" aria-current="page">
                                              Datos anteriores
                                            </a>
                                    
                                            <a href="#tab4" data-target="tab4"  class="tabs border-transparent text-gray-200 hover:text-gray-300 hover:border-gray-200 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm">
                                              Holders
                                            </a>
                                    
                                            <a href="#tab5" data-target="tab5" class=" tabs border-transparent text-gray-200 hover:text-gray-300 hover:border-gray-200 whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm">
                                              Carteras
                                            </a>
                                          </nav>
                                          <div class="tabs tabContent">
                                                <div class="tab-item active" id="tab1" style={{ display: "block" }}>
                                                    <div class="grid grid-cols-3 gap-4">
                                                        <div class="col-span-2 ">
                                                            <Line data={data} options={options} />
                                                        </div>
                                                        <div class="px-6 py-3 rounded bg-white">
                                                            <h2 class="font-bold mb-4">COIN Price and Market Stats</h2>
                                                                <div class="grid grid-cols-2 border-b border-solid border-gray-200 py-4">
                                                                
                                                                    <div class="text-sm text-let">
                                                                        Capitalización de mercado	
                                                                    </div>
                                                                    <div class="ml-auto text-sm font-bold">
                                                                    67.861.310.932 US$
                                                                    </div>
                                                                </div>
                                                                <div class="grid grid-cols-2 border-b border-solid border-gray-200 py-4">
                                                                <div class="text-sm text-let">
                                                                    Capitalización de mercado	
                                                                </div>
                                                                <div class="ml-auto text-sm font-bold">
                                                                67.861.310.932 US$
                                                                </div>
                                                                </div>
                                                                <div class="grid grid-cols-2 border-b border-solid border-gray-200 py-4">
                                                                <div class="text-sm text-let">
                                                                    Capitalización de mercado	
                                                                </div>
                                                                <div class="ml-auto text-sm font-bold">
                                                                67.861.310.932 US$
                                                                </div>
                                                                </div>
                                                                <div class="grid grid-cols-2 border-b border-solid border-gray-200 py-4">
                                                                <div class="text-sm text-let">
                                                                    Capitalización de mercado	
                                                                </div>
                                                                <div class="ml-auto text-sm font-bold">
                                                                67.861.310.932 US$
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-item" id="tab2">
                                                s
                                                </div> 
                                                <div class="tab-item" id="tab3">
                                                a
                                                </div> 
                                                <div class="tab-item" id="tab4">
                                                    w   
                                                </div>
                                                <div class="tab-item" id="tab5">
                                                q  
                                                </div>
                                          </div>
                                    </div>
                                  </div>
            
                            </div>
                            <div class="container">
                                <div class="flex flex-col">
                                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                         
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                            </div>
                    
                            <div class="container">
                                <div class="container-tabs">
                                    <div class="item-wrapper__tab active">
                                        <span>Coins</span>
                                    </div>
                                    <div class="item-wrapper__tab">
                                        <span>Recently Added</span>
                                    </div>
                                    <div class="item-wrapper__tab">
                                        <span>Large Movers</span>
                                    </div>
                                    <div class="item-wrapper__tab">
                                        <span>Categories</span>
                                    </div>
            
                                </div>
                                <div class="d-flex align-items-center centralize">
                                    <h2 style={{margin: "0" }}>Las 100 principales monedas según la capitalización de mercado</h2>
                                    <div class="ml-auto">
                                        <input class="ios-switch --dark" type="checkbox" checked="" />
                                    </div>
                                </div>
                                <div class="filters-container d-flex align-items-center">
                                    <div class="item__filter">
                                        <span>USD</span>
                                    </div>
                                    <div class="item__filter">
                                        <span>Todas las categorias</span>
                                    </div>
                                    <div class="item__filter">
                                        <span>Filtro</span>
                                    </div>
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
            
                                <br />
                                <br />
                            </div>
                            
                        </section>
            
                        <section  data-scroll-section style={{ display:"none"}}>
                            <div class="">
                                <div id="rest"  class="" style={{ height:"10000px", backgroundColor: "red" }}>
                            
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
               
               
                
          
           

        )
    }
}

export default Profile;
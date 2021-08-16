import React, { Component } from "react";

class Portafolio extends Component {
    render() {
        return (
            <div>
               <div class="flex justify-content mt-10">
                  <div class=" flex justify-content w-full">
                     <h2 class="text-white text-4xl font-bold w-full text-opacity-90">Mi Portafolio</h2>
                  </div>
               </div>
               <div class="flex px-8 mt-12">
                  <div class="rounded shadow-sm rounded p-3 flex bg-gray-500 bg-opacity-20">
                     <div class="w-16 h-16 rounded-full bg-gray-500 bg-opacity-30 p-4 mr-6">
                        <svg class="w-full h-full fill-current text-indigo-500 bg-opacity-50" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z"/><circle cx="16" cy="12" r="1.5"/></svg>
                     </div>
                     <div class=" flex items-center flex-col justify-center text-right">
                        <div class="text-gray-200 text-right text-base	 w-full">
                           0,00 US$
                        </div>
                        <div class=" text-gray-200 text-right w-full text-sm">
                        Total Balance
                        </div>
                     </div>
                  </div>

                  <div class="rounded shadow-sm rounded p-3 flex bg-gray-500 bg-opacity-20 mx-4">
                     <div class="w-16 h-16 rounded-full bg-gray-500 bg-opacity-30 p-4 mr-6">
                        <svg class="w-full h-full fill-current text-indigo-500 bg-opacity-50" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z"/><circle cx="16" cy="12" r="1.5"/></svg>
                     </div>
                     <div class=" flex items-center flex-col justify-center text-right">
                        <div class="text-gray-200 text-right text-base	 w-full">
                           0,00 US$
                        </div>
                        <div class=" text-gray-200 text-right w-full text-sm">
                           24h Portfolio Change <span class="text-indigo-500">(+0%)</span>
                        </div>
                     </div>
                  </div>


                  <div class="rounded shadow-sm rounded p-3 flex bg-gray-500 bg-opacity-20">
                     <div class="w-16 h-16 rounded-full bg-gray-500 bg-opacity-30 p-4 mr-6">
                        <svg class="w-full h-full fill-current text-indigo-500 bg-opacity-50" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z"/><circle cx="16" cy="12" r="1.5"/></svg>
                     </div>
                     <div class=" flex items-center flex-col justify-center text-right">
                        <div class="text-gray-200 text-right text-base	 w-full">
                           0,00 US$
                        </div>
                        <div class=" text-gray-200 text-right w-full text-sm">
                        Total Profit Loss (-)
                        </div>
                     </div>
                  </div>

                  <div class="ml-auto flex items-center">
                     <button class="bg-indigo-500 rounded shadow-sm px-8 py-3 text-white flex items-center">
                        <svg class="w-6 h-6 fill-current text-gray-100 bg-opacity-50 mr-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                        Añadir
                     </button>
                  </div>

                 
               </div>
               <div class="px-8 mt-12">
               <div class="">
                     <div class="flex flex-col">
                        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                           <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                              <table class="min-w-full divide-y divide-gray-200">
                                 <thead class="bg-gray-500 bg-opacity-50">
                                    <tr>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                       #
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                       Moneda
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                       Precio
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                       1 h
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                       24 h 
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                       7 D
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                       Cap. de Mercado
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                       Últimos 7 días
                                    </th>

                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                       Tendecia
                                    </th>

                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                      Pérdidas y ganancias
                                    </th>
                                   
                                    </tr>
                                 </thead>
                                 <tbody class="bg-white divide-y divide-gray-200">
                                    <tr>
                                    <td class="px-6 py-4 whitespace-nowrap flex items-center">
                                          <div class="flex items-center h-full">
                                             <svg class="text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27l4.15,2.51c0.76,0.46,1.69-0.22,1.49-1.08l-1.1-4.72l3.67-3.18c0.67-0.58,0.31-1.68-0.57-1.75l-4.83-0.41 l-1.89-4.46c-0.34-0.81-1.5-0.81-1.84,0L9.19,8.63L4.36,9.04c-0.88,0.07-1.24,1.17-0.57,1.75l3.67,3.18l-1.1,4.72 c-0.2,0.86,0.73,1.54,1.49,1.08L12,17.27z"/></g></svg>
                                             <span class="ml-3">2</span>
                                          </div>
                                    </td>  
                                    <td class="px-6 py-4 whitespace-nowrap">

                                       <div class="flex items-center">
                                          <div class="flex-shrink-0 h-10 w-10">
                                             <img class="h-10 w-10 rounded-full" src="https://assets.coingecko.com/coins/images/4645/thumb/DAG.png?1626339160" alt="" />
                                          </div>
                                          <div class="ml-4">
                                          <div class="text-sm font-medium text-gray-900 mr-6">
                                             Axie Infinity
                                          </div>
                                          <div class="text-sm text-gray-500">
                                             AXS
                                          </div>
                                          </div>
                                       </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                       <div class="text-sm text-gray-900">67,38 US$</div>
                                     
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                       <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                          0.2%	
                                       </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <span class=" px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    1.0%	
                                       </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                       <span class=" px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                       59.1%
                                       </span>
                                    </td>
                                    <td>
                                    3.812.165.618 US$	
                                    </td>
                                    <td>
                                       <img src="https://www.coingecko.com/coins/13029/sparkline" />
                                    </td>
                                    <td>
                                       <span>0,00 US$ (0%) <br />0.0 AXS</span>
                                    </td>
                                    <td>
                                       <span>0,00 US$  <br /><span class="text-danger-500">0%</span></span>
                                    </td>
                                    </tr>

                              
                                 </tbody>
                              </table>
                              </div>
                           </div>
                        </div>
                        </div>
                  </div>
               </div>
            </div>
        )
    }
}

export default Portafolio;
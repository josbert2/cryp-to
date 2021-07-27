import React, { Component } from "react";

class Navbar extends Component {
   render() {
      return (
         <nav class="bg-gray-800" style={{ background: "rgb(36, 39, 49)" }}>
            <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
               <div class="relative flex items-center justify-between h-16">
                     <div class="flex items-center px-2 lg:px-0">
                        <div class="flex-shrink-0">
                           <h2>LOGO</h2>
                        </div>
                        <div class="hidden lg:block lg:ml-6">
                           <div class="flex space-x-4 items-center">
                               
                                 <a>
                                    <svg fill="#FFF" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "15px" }} enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px">
                                       <rect fill="none" height="24" width="24"></rect>
                                       <path
                                             d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"
                                       ></path>
                                    </svg>
                                 </a>
                                 <a href="">
                                    <input class="ios-switch --dark" type="checkbox" checked="" />
                                 </a>
                                 <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Live Prices</a>
                                 <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pricings</a>
                                 <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Alert</a>
                           </div>
                        </div>
                     </div>
                     <div class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                        <div class="max-w-lg w-full lg:max-w-xs">
                           <label for="search" class="sr-only">Search</label>
                           <div class="relative">
                                 <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                   
                                    <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                       <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                    </svg>
                                 </div>
                                 <input
                                    id="search"
                                    name="search"
                                    class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                                    placeholder="Search"
                                    type="search"
                                 />
                           </div>
                        </div>
                     </div>
                     <div class="flex lg:hidden">
                        
                        <button
                           type="button"
                           class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                           aria-controls="mobile-menu"
                           aria-expanded="false"
                        >
                           <span class="sr-only">Open main menu</span>

                           <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                           </svg>
                  
                           <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                           </svg>
                        </button>
                     </div>
                     <div class="hidden lg:block lg:ml-4">
                        <div class="flex items-center">
                           <button class="flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                 <span class="sr-only">View notifications</span>
                                
                                 <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                       stroke-width="2"
                                       d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    ></path>
                                 </svg>
                           </button>

                           
                           <div class="ml-4 relative flex-shrink-0 flex">
                                 <div>
                                    <a href="login.html" class="login"><button>LOGIN</button> </a>
                                 </div>
                                 <div class="">
                                    <a href="" class="register"><button>REGISTER</button></a>
                                 </div>

                             
                           </div>
                        </div>
                     </div>
               </div>
            </div>

            
            <div class="lg:hidden" id="mobile-menu">
               <div class="px-2 pt-2 pb-3 space-y-1">
                    
                     <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
                     <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
                     <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
                     <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
               </div>
               <div class="pt-4 pb-3 border-t border-gray-700">
                     <div class="flex items-center px-5">
                        <div class="flex-shrink-0">
                           <img
                                 class="h-10 w-10 rounded-full"
                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixqx=7qwKjEp7Xv&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                                 alt=""
                           />
                        </div>
                        <div class="ml-3">
                           <div class="text-base font-medium text-white">Tom Cook</div>
                           <div class="text-sm font-medium text-gray-400">tom@example.com</div>
                        </div>
                        <button class="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                           <span class="sr-only">View notifications</span>

                           <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                 <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                 ></path>
                           </svg>
                        </button>
                     </div>
                     <div class="mt-3 px-2 space-y-1">
                        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</a>
                        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>
                        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>
                     </div>
               </div>
            </div>
         </nav>
      )
   }
}

export default Navbar;

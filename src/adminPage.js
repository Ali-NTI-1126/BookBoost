 import React, { useState } from "react";
 import logo from "./icons/bookboost.png";
 import logout from "./icons/logout2.png";
 import './page1.css'; 


 function admin() {
   const [currentPage, setCurrentPage] = useState(1);
   const [rowsPerPage] = useState(6);
   const [rows, setRows] = useState([]);
   const [latestHotelName, setLatestHotelName] = useState("");
   const [showConfirmation, setShowConfirmation] = useState(false);
   const [searchQuery, setSearchQuery] = useState("");
  
   const handleAddRow = () => {
     const name = document.getElementById("name").value;
     const email = document.getElementById("email").value;
     const admin = document.getElementById("hotel-admin").value;
     const created = new Date().toLocaleString();

     const newRow = {
       name,
       email,
       admin,
       created,
     };

     setRows([...rows, newRow]);
     setLatestHotelName(newRow.name);
   };

   const indexOfLastRow = currentPage * rowsPerPage;
   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
   const currentRows = rows
     .filter((row) =>
       row.name.toLowerCase().includes(searchQuery.toLowerCase())
     )
     .slice(indexOfFirstRow, indexOfLastRow);

   const pageNumbers = [];
   for (let i = 1; i <= Math.ceil(rows.length / rowsPerPage); i++) {
     pageNumbers.push(i);
   }

   const handleLogout = () => {
     setShowConfirmation(true);
   };

   const handleConfirmLogout = () => {
     setShowConfirmation(false);
   };

   const handleCancelLogout = () => {
     setShowConfirmation(false);
   };

   const handleSearchQuery = (event) => {
     setSearchQuery(event.target.value);
   };

  


   return (
     <div className="flex h-screen">
        <div className="w-20 bg-[#313e4d]">
         <ul className="flex flex-col items-center justify-center h-full">
           <li className="flex-grow mt-2.5">
            <a href="/"> <img src={logo} alt="Logo" className="w-2/3 mx-auto" /></a>
           </li>
           <li className="flex-grow-0 mt-auto">
             <button onClick={handleLogout} class="logoutbutton">
               <img src={logout} alt="logout"  />
             </button>
           </li>
         </ul>
       </div>

       {/* Confirmation Modal */}
       {showConfirmation && (
         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
           <div className="bg-white p-6 rounded-lg">
             <p className="text-lg font-medium mb-2">Are you sure you want to logout?</p>
             <div className="flex justify-center">
   <button onClick={handleConfirmLogout} className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:bg-red-600 mr-2">
     <a href="/" className="hover:text-white focus:text-white">
       Yes
     </a> 
   </button>
   <button onClick={handleCancelLogout} className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:bg-gray-500">
     No
   </button>
 </div>


             </div>
         </div>
       )}



       <div className="w-2/5 bg-[#f8f9fa] relative">
         <p className="text-2xl mx-3.5 my-2.5 text-[#313e4d] font-medium">
           Admin
         </p>
         <div className="flex items-center absolute inset-0 mx-2.5 my-auto border border-solid border-gray-300 rounded-lg p-4 h-[3rem] cursor-pointer mt-[4rem]">
           <p className="text-[#313e4d]">Promote</p>
         </div>

         <div className="flex items-center absolute inset-0 mx-2.5 my-auto border border-solid border-gray-300 rounded-lg p-4 h-[3rem] cursor-pointer mt-[9rem]">
           <p className="text-[#313e4d]">Feedback</p>
         </div>
         <div>
           <p className="text-xl mx-3.5 my-[11rem] text-[#313e4d]">
             Last added
           </p>
           <div className="flex items-center absolute inset-0 mx-2.5 my-auto border border-solid border-gray-300 rounded-lg p-4 h-[3rem] cursor-pointer mt-[16rem]">
             <p className="text-[#313e4d]">{latestHotelName}</p>
           </div>
         </div>
       </div>

       <div className="w-full bg-[#d8dfe7]">
   <div className="flex items-center mx-3.5 my-2.5">
     <p className="text-2xl font-normal text-[#313e4d] mr-3.5">Hotels</p>
     <div className="flex items-center rounded-lg  ml-[60%]">
       <input
         type="text"
         placeholder="Search by Name"
         value={searchQuery}
         onChange={handleSearchQuery}
         class="serachinput"
       />
       {/* <button className="flex items-center justify-center px-4 text-gray-400 hover:text-gray-500">
         <SearchIcon className="h-5 w-5" />
       </button> */}
     </div>
   </div>


         <div className="overflow-x-auto rounded-l-lg">
           <table className=" w-[96.5%] bg-white rounded-lg mx-3.5">
             <thead className="bg-gray-100 border-b border-gray-200">
               <tr>
               <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-[#313e4d]">
               Name
             </th>
             <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-[#313e4d]">
               Email Adress
             </th>
             <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-[#313e4d]">
               Hotel-Admin
             </th>
             <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-[#313e4d]">
               Created
             </th>
             <th className="text-left py-3 px-4 uppercase font-semibold text-sm text-[#313e4d]">
               Hotel-ID
             </th>
           </tr>
         </thead>
         <tbody className="text-gray-700 text-xs">
           {currentRows.map((row, index) => (
             <tr key={index}>
               <td className="py-3 px-4">{row.name}</td>
               <td className="py-3 px-4">{row.email}</td>
               <td className="py-3 px-4">{row.admin}</td>
               <td className="py-3 px-4">{row.created}</td>
               <td className="py-3 px-4">{row.hotelid}</td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>

     <div class="divselect">
   <button1
     className={`px-3 py-2 text-sm font-medium text-blue-500 bg-white border border-blue-500 rounded ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-500 hover:text-white'}`}
     disabled={currentPage === 0}
     onClick={() => setCurrentPage(currentPage - 1)}
   >
     Previous
   </button1>
   {pageNumbers.map((number) => {
     if (
       number === 1 ||
       number === Math.ceil(rows.length / rowsPerPage) ||
       (number >= currentPage - 1 && number <= currentPage + 1)
     ) {
       return (
         <button1
           key={number}
           className={`px-3 py-2 text-sm font-medium text-blue-500 bg-white border border-gray-300 rounded ${currentPage === number ? 'bg-blue-500' : 'hover:bg-blue-500 hover:text-white'}`}
           onClick={() => setCurrentPage(number)}
           disabled={number < 1 || number > Math.ceil(rows.length / rowsPerPage)}
           style={{ fontWeight: currentPage === number ? 'bold' : 'normal' }}
         >
           {number}
         </button1>
       );
     }
     if (
       (number === currentPage - 2 && currentPage > 3) ||
       (number === currentPage + 2 && currentPage < Math.ceil(rows.length / rowsPerPage) - 2)
     ) {
       return (
         <span key={number} className="px-3 py-2 text-sm font-medium text-gray-500">
           ...
         </span>
       );
     }
     return null;
   })}
   <button1
     className={`px-3 py-2 text-sm font-medium text-blue-500 bg-white border border-blue-500 rounded ${currentPage === Math.ceil(rows.length / rowsPerPage) ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-500 hover:text-white'}`}
     disabled={currentPage === Math.ceil(rows.length / rowsPerPage)}
     onClick={() => setCurrentPage(currentPage + 1)}
   >
     Next
   </button1>
  
 </div>


 <p class="createnew-admin" >Create New</p>
 <div class="admininputbox">
   <form className="flex flex-col mt-2">
     <div className="flex flex-wrap justify-between">
       <label for="name" class="admininput-name">
         Name:
       </label>
       <input
         type="text"
         id="name"
         class="admininputbox-name "
         required
       />

       <label for="email" class="admininput-email ">
         Email Adress:
       </label>
       <input
         type="email"
         id="email"
         class="admininputbox-email "
         required
       />

       <label for="hotel-admin" class="admininput-hotel">
         Hotel-Admin:
       </label>
       <input
         type="text"
         id="hotel-admin"
         class="admininputbox-hotel"
         required
       />
     </div>

  
   </form>
 </div>
 <button
       type="button"
       class="admincreatebutton"
       onClick={handleAddRow}
     >
       Create
     </button>
   </div>
 </div>
 );
 }

 export default admin;
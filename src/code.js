// import React, { useState } from 'react';
// import logo from './icons/bookboost.png';

// function App() {
//   const [rows, setRows] = useState([]);

//   const handleAddRow = () => {
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const admin = document.getElementById('hotel-admin').value;
//     const created = new Date().toLocaleString();

//     const newRow = {
//       name,
//       email,
//       admin,
//       created,
//     };

//     setRows([...rows, newRow]);
//   };

//   return (
//     <div className="flex h-screen">
//       <div className="w-20 bg-[#313e4d]">
//         <ul className="flex flex-col items-center justify-center h-full">
//           <li className="flex-grow mt-2.5">
//             <img src={logo} alt="Logo" className="w-2/3 mx-auto" />
//           </li>
//         </ul>
//       </div>

//       <div className="w-2/5 bg-[#f8f9fa] relative">
//         <p className="text-2xl mx-3.5 my-2.5 text-[#313e4d] font-medium">Admin</p>
//         <div className="flex items-center absolute inset-0 mx-2.5 my-auto border border-solid border-gray-300 rounded-lg p-4 h-[3rem] cursor-pointer mt-[4rem]">
//           <p className="text-[#313e4d]">Promote</p>
//         </div>

//         <div className="flex items-center absolute inset-0 mx-2.5 my-auto border border-solid border-gray-300 rounded-lg p-4 h-[3rem] cursor-pointer mt-[9rem]">
//           <p className="text-[#313e4d]">Feedback</p>
//         </div>
//         <div>
//           <p className="text-xl mx-3.5 my-[11rem] text-[#313e4d]">Last added</p>
//           <div className="flex items-center absolute inset-0 mx-2.5 my-auto border border-solid border-gray-300 rounded-lg p-4 h-[3rem] cursor-pointer mt-[16rem]">
//             <p className="text-[#313e4d]">/Placeholder/</p>
//           </div>
//         </div>
//       </div>

//       <div className="w-full bg-[#d8dfe7] ">
//         <div>
//           <p className="text-2xl mx-3.5 my-2.5 text-[#313e4d] "> Hotels</p>
//         </div>
//         <div className="overflow-x-auto">
//           <div className="mx-3.5  bg-white shadow-md rounded-l-lg">
//             <table className="table-auto divide-y divide-gray-200">
//               <thead>
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Name
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Email Address
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Hotel-Admin
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Created
//                   </th>
//                   </tr>
//                   </thead>




//                   <tbody className="divide-y divide-gray-200">
//                   {rows.map((row, index) => (
//                   <tr key={index}>

//                   <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="flex items-center">
//                   <div className="ml-4">
//                   <div className="text-sm font-medium text-gray-900">{row.name}</div>
//                   </div>
//                   </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-500">{row.email}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-500">{row.admin}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-500">{row.created}</div>
//                   </td>
//                   </tr>
//                   ))}
//                   </tbody>
//                   </table>
//                   </div>
//                   </div>
//                   <div className="flex justify-end">
//                   <div className="flex items-center bg-white shadow-md rounded-lg my-5 mx-3.5">
//                   <div className="mx-3.5">
//                     <p>test</p>
//                   <input
//                                type="text"
//                                placeholder="Name"
//                                className="py-2 px-4 bg-gray-200 focus:ring-2 focus:ring-gray-300 rounded-lg"
//                                id="name"
//                              />
//                   </div>
//                   <div className="mx-3.5">
//                   <input
//                                type="text"
//                                placeholder="Email Address"
//                                className="py-2 px-4 bg-gray-200 focus:ring-2 focus:ring-gray-300 rounded-lg"
//                                id="email"
//                              />
//                   </div>
//                   <div className="mx-3.5">
//                   <input
//                                type="text"
//                                placeholder="Hotel-Admin"
//                                className="py-2 px-4 bg-gray-200 focus:ring-2 focus:ring-gray-300 rounded-lg"
//                                id="hotel-admin"
//                              />
//                   </div>
//                   <button
//                              className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
//                              onClick={handleAddRow}
//                            >
//                   Add
//                   </button>
//                   </div>
//                   </div>
//                   </div>
//                   </div>
//                   );
//                   }
                  
//                   export default App;

import React from 'react';
import logo from './icons/bookboost.png';

function App() {
  return (
    <div className="flex h-screen">
      <div className="w-20 bg-[#313e4d]">
        <ul className="flex flex-col items-center justify-center h-full">
          <li className="flex-grow mt-2.5">
            <img src={logo} alt="Logo" className="w-2/3 mx-auto" />
          </li>
        </ul>
      </div>
      
      <div className="w-2/5 bg-[#f8f9fa] relative">
        <p className="text-2xl mx-3.5 my-2.5 text-[#313e4d] font-medium">Admin</p>
        <div className="flex items-center absolute inset-0 mx-2.5 my-auto border border-solid border-gray-300 rounded-lg p-4 h-[3rem] cursor-pointer mt-[4rem]" >
          <p className="text-[#313e4d]">Promote</p>
        </div>

        <div className="flex items-center absolute inset-0 mx-2.5 my-auto border border-solid border-gray-300 rounded-lg p-4 h-[3rem] cursor-pointer mt-[9rem]">
          <p className="text-[#313e4d]">Feedback</p>
        </div>
        <div> 
          <p className="text-xl mx-3.5 my-[11rem] text-[#313e4d]">Last added</p>
          <div className="flex items-center absolute inset-0 mx-2.5 my-auto border border-solid border-gray-300 rounded-lg p-4 h-[3rem] cursor-pointer mt-[16rem]">
          <p className="text-[#313e4d]">/Placeholder/</p>
        </div>
        </div>
      </div>

      <div className="w-full bg-[#d8dfe7] ">
        <div>
          <p className="text-2xl mx-3.5 my-2.5 text-[#313e4d] " > Hotels</p>
        </div>
        <div className="overflow-x-auto">
  <div className="mx-3.5  bg-white shadow-md rounded-l-lg">
    <table className="table-auto divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email Address</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hotel-Admin</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Updated</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hotel-ID</th>
        </tr>
      </thead>
     
    </table>
  </div>
</div>


        


        
        {/* Create New Section */}
        
        <p className="text-xl absolute bottom-0 mb-[12.5rem] mx-3.5 text-[#313e4d]" >Create New</p>
        <div class="fixed bottom-0 mx-3.5 my-10 bg-white rounded-l-lg p-2 w-[98.4%] ">
          <div class="flex items-center mb-6">
            <label for="name" class="block text-m mr-3 w-32  px-3 py-0.5 rounded-lg">Name</label>
            <input type="text" name="name" id="name" class="border border-solid border-gray-300 rounded-lg p-0.5 w-2/4" />
            </div>
            
            <div class="flex items-center mb-6">
              <label for="email" class="block text-m mr-3 w-32  px-3 py-0.5 rounded-lg">Email Address</label>
              <input type="email" name="email" id="email" class="border border-solid border-gray-300 rounded-lg p-0.5 w-2/4" />
              </div>
              <div class="flex items-center">
                <label for="hotel-admin" class="block text-m mr-3 w-32  px-3 py-0.5 rounded-lg">Hotel Admin</label>
                <input type="text" name="hotel-admin" id="hotel-admin" class="border border-solid border-gray-300 rounded-lg p-0.5 w-2/4" />
                </div>
                </div>
                </div>
                <div className="absolute bottom-0 right-[7%] my-1">
                  <button class="bg-green-500 hover:bg-green-700 text-white font-medium py-1 px-4 rounded ">Create</button>
                  </div>
                  </div>
  );
}

export default App;



import React, { useState } from 'react';
import logo from './icons/bookboost.png';

function App() {
  const [rows, setRows] = useState([]);
  const [latestHotelName, setLatestHotelName] = useState('');


  const handleAddRow = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const admin = document.getElementById('hotel-admin').value;
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

  return (
    <div className="flex h-screen">
      <div className="w-20 bg-[#313e4d]">
        <ul className="flex flex-col items-center justify-center h-full">
          <li className="flex-grow mt-2.5">
            <img src={logo} alt="Logo" className="w-2/3 mx-auto" />
          </li>
        </ul>
      </div>

      <div className="w-2/5 bg-[#f8f9fa] relative">
        <p className="text-2xl mx-3.5 my-2.5 text-[#313e4d] font-medium">Admin</p>
        <div className="flex items-center absolute inset-0 mx-2.5 my-auto border border-solid border-gray-300 rounded-lg p-4 h-[3rem] cursor-pointer mt-[4rem]">
          <p className="text-[#313e4d]">Promote</p>
        </div>

        <div className="flex items-center absolute inset-0 mx-2.5 my-auto border border-solid border-gray-300 rounded-lg p-4 h-[3rem] cursor-pointer mt-[9rem]">
          <p className="text-[#313e4d]">Feedback</p>
        </div>
        <div>
          <p className="text-xl mx-3.5 my-[11rem] text-[#313e4d]">Last added</p>
          <div className="flex items-center absolute inset-0 mx-2.5 my-auto border border-solid border-gray-300 rounded-lg p-4 h-[3rem] cursor-pointer mt-[16rem]">
  <p className="text-[#313e4d]">{latestHotelName}</p>
</div>
        </div>
      </div>

      <div className="w-full bg-[#d8dfe7] ">
        <div>
          <p className="text-2xl mx-3.5 my-2.5 text-[#313e4d] "> Hotels</p>
        </div>
        <div className="overflow-x-auto">
          <div className="mx-3.5  bg-white shadow-md rounded-l-lg">
            <table className="table-auto divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email Address
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hotel-Admin
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                  </th>
                  </tr>
                  </thead>




                  <tbody className="divide-y divide-gray-200">
                  {rows.map((row, index) => (
                  <tr key={index}>

                  <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                  <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">{row.name}</div>
                  </div>
                  </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{row.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{row.admin}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{row.created}</div>
                  </td>
                  </tr>
                  ))}
                  </tbody>
                  </table>
                  </div>
                  </div>
                  <div className="flex justify-end absolute bottom-0">
                  <div className="flex items-center bg-white shadow-md rounded-lg my-5 mx-3.5 bottom-0">
                  <div className="mx-3.5">
                  <input
                               type="text"
                               placeholder="Name"
                               className="py-2 px-4 bg-gray-200 focus:ring-2 focus:ring-gray-300 rounded-lg"
                               id="name"
                             />
                  </div>
                  <div className="mx-3.5">
                  <input
                               type="text"
                               placeholder="Email Address"
                               className="py-2 px-4 bg-gray-200 focus:ring-2 focus:ring-gray-300 rounded-lg"
                               id="email"
                             />
                  </div>
                  <div className="mx-3.5">
                  <input
                               type="text"
                               placeholder="Hotel-Admin"
                               className="py-2 px-4 bg-gray-200 focus:ring-2 focus:ring-gray-300 rounded-lg"
                               id="hotel-admin"
                             />
                  </div>
                  <button
                             className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                             onClick={handleAddRow}
                           >
                  Create
                  </button>
                  </div>
                  </div>
                  </div>
                  </div>
                  );
                  }
                  
                  export default App; 


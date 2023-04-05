import React, { useState } from "react";
import logo from "./icons/bookboost.png";
import logout from "./icons/logout2.png";

function facility() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [campaignInfo, setCampaignInfo] = useState(null);
  const [showCampaignInfo, setShowCampaignInfo] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const categories = [
    "Gym",
    "Spa",
    "Solarium",
    "Shops",
    "Restaurants",
    "Car Rental",
    "Bicycle Rental",

    
  ];

 const handleCreateCampaign = (event) => {
    event.preventDefault();
  
    const title = event.target.title.value;
    const description = event.target.description.value;
    const imageFile = event.target.pictures.files[0];
    const datetime = event.target.datetime.value;
  
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => {
      const campaign = {
        title,
        description,
        image: reader.result,
        category: selectedCategory,
        datetime,
      };
      setCampaignInfo(campaign);
    };
  };

  
  const handleLogout = () => {
    setShowConfirmation(true);
  };

  const handleConfirmLogout = () => {
    // perform the logout action here
    setShowConfirmation(false);
  };

  const handleCancelLogout = () => {
    setShowConfirmation(false);
  };

  return (
<div className="flex h-screen">
  <div className="w-20 bg-[#313e4d]">
    <ul className="flex flex-col items-center justify-center h-full">
      <li className="flex-grow mt-2.5">
        <img src={logo} alt="Logo" className="w-2/3 mx-auto" />
      </li>
      <li className="flex-grow-0 mt-auto">
        <button onClick={handleLogout}>
          <img src={logout} alt="logout" className="w-[56%] mx-auto" />
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

  <div className="w-2/5 bg-gray-100 relative">
    <p className="text-2xl mx-3.5 my-2.5 text-gray-800 font-medium">
      Facility Manager
    </p>

    <div>
      <div className="relative">
        <button 
          className="flex items-center absolute inset-0 mx-2.5 my-4 border border-solid border-gray-300 rounded-lg p-4 h-[3rem] cursor-pointer"
          onClick={() => setShowCampaignInfo(!showCampaignInfo)}
        >
          Current Campaigns
        </button>
        {showCampaignInfo && (
          <div className="absolute z-10 bg-white shadow border border-gray-300 rounded-lg mt-1 w-[95%] left-1/2 transform -translate-x-1/2 top-[5rem]">
            {campaignInfo ? (
              <div className="p-4">
                <h2 className="text-lg font-medium mb-2">
                  Campaign Info
                </h2>
                <p><strong>Title:</strong> {campaignInfo.title}</p>
                <p><strong>Description:</strong> {campaignInfo.description}</p>
                <p><strong>Category:</strong> {campaignInfo.category}</p>
                <p><strong>Date and Time:</strong> {campaignInfo.datetime}</p>
                <img src={campaignInfo.image} alt="Campaign" className="mx-auto w-[4rem]" />
              </div>
            ) : (
              <div className="p-4">
                <p className="text-gray-500">
                  No campaign information available.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  </div>

        <div className="w-full bg-[#d8dfe7] p-4">
          <h2 className="text-2xl font-normal text-[#313e4d] mr-3.5">Create Campaign</h2>
          <form onSubmit={handleCreateCampaign}>
          <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" for="title">
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Title"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" for="description">
          Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          placeholder="Description"
          rows="4"
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" for="pictures">
          Image
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="pictures"
          type="file"
          accept="image/*"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" for="category">
          Category
        </label>
        <div className="flex flex-wrap justify-center items-center">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`bg-[#d8dfe7] rounded-2xl py-1 px-3 mr-2 mb-2 cursor-pointer ${
                selectedCategory === category ? "bg-[#4f9df6] text-[white]  " : "text-[#313e4d]"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" for="datetime">
          Date and Time
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="datetime"
          type="datetime-local"
          required
        />
      </div>

      <div className="flex justify-end">
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-md mr-2"
          type="submit"
        >
          Create
        </button>
        <button
          className="bg-gray-300 text-[#313e4d] py-2 px-4 rounded-md"
          type="reset"
        >
          Reset
        </button>
      </div>
    </form>
    </div>
  </div>
);
}

export default facility;
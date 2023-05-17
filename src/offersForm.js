
import React, { useState } from "react";
import logo from "./icons/BB.png";
import './page1.css'; 

function PromotionalOffersForm() {
  const [facilities, setFacilities] = useState([
    { id: 1, name: "Gym", selected: false },
    { id: 2, name: "Spa", selected: false },
    { id: 3, name: "Solarium", selected: false },
    { id: 4, name: "Shops", selected: false },
    { id: 5, name: "Restaurants", selected: false },
    { id: 6, name: "Car Rental", selected: false },
    { id: 7, name: "Bicycle Rental", selected: false },
  ]);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [noThanksSelected, setNoThanksSelected] = useState(true);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleFacilityClick = (id) => {
    const updatedFacilities = facilities.map((facility) =>
      facility.id === id ? { ...facility, selected: !facility.selected } : facility
    );
    setFacilities(updatedFacilities);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNoThanksChange = () => {
    setNoThanksSelected(!noThanksSelected);
    setShowPhoneInput(false);
    setShowEmailInput(false);
  };

  const handleTermsChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (noThanksSelected || showPhoneInput || showEmailInput) {
      const selectedFacilities = facilities
        .filter((facility) => facility.selected)
        .map((facility) => facility.name);
      console.log("Selected facilities:", selectedFacilities);
      console.log("Phone number:", phone);
      console.log("Email address:", email);
      // Handle form submission logic here
      if (termsAccepted) {
        alert("Form submitted successfully!");
      } else {
        alert("Please accept the Terms of Service to submit the form.");
      }
    } else {
      alert("Please select one of the options");
    }
  };

  return (
    <div className="bg-[#d8dfe7] min-h-screen flex flex-col items-center justify-center">

     <a href="/">
  <img src={logo} alt="Logo" class="formlogo" />
</a>


      <div className="bg-white p-8 rounded-md shadow-md w-[50%] h-[50%]">
        <h1 className="text-2xl font-bold mb-1">Hello User,</h1>
        <p className="text-lg mb-6">
          Which facilities are you interested in receiving promotional offers for? 
          Please fill in by clicking on the different categories below.
        </p>

        <div class="facilitycat">
          {facilities.map((facility) => (
            <button5
              key={facility.id}
              className={`flex items-center justify-center text-m font-bold py-2 px-4 rounded-md ${
                facility.selected ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-800"
              } hover:bg-purple-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors duration-300`}
              onClick={() => handleFacilityClick(facility.id)}
            >
              <span className="text-center">{facility.name}</span>
              </button5>
              ))}
        
</div>

    <p className="text-lg mb-2 mt-5">How would you like to be contacted?</p>

    <div className="flex items-center mb-2">
      <input
        type="radio"
        id="phone"
        name="contact-method"
        value="phone"
        checked={showPhoneInput}
        onChange={() => {
          setShowPhoneInput(true);
          setShowEmailInput(false);
          setNoThanksSelected(false);
        }}
        className="mr-2"
      />
      <label1 htmlFor="phone" className="text-lg">
        Yes, via SMS
      </label1>

      {showPhoneInput && (
        <input
          type="tel"
          id="phone-input"
          placeholder="Enter your phone number"
          value={phone}
          onChange={handlePhoneChange}
          class="phoneinput"
        />
      )}
    </div>

    <div className="flex items-center mb-2">
      <input
        type="radio"
        id="email"
        name="contact-method"
        value="email"
        checked={showEmailInput}
        onChange={() => {
          setShowEmailInput(true);
          setShowPhoneInput(false);
          setNoThanksSelected(false);
        }}
        className="mr-2"
      />
      <label2 htmlFor="email" className="text-lg">
        Yes, via Email
      </label2>

      {showEmailInput && (
        <input
          type="email"
          id="email-input"
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
          class="emailinput"
        />
      )}
    </div>

    <div className="flex items-center mb-4">
      <input
        type="radio"
        id="no-thanks"
        name="contact-method"
        value="no-thanks"
        checked={noThanksSelected}
        onChange={handleNoThanksChange}
        className="mr-2"
      />
      <label3 htmlFor="no-thanks" className="text-lg">
      No thanks, I would not like to recevie any message
      </label3>
    </div>
    <div className="flex items-center mt-5">
                      <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={termsAccepted}
                        onChange={handleTermsChange}
                      />
                      <label4 htmlFor="terms" className="text-lg ml-1">
                       <a href="https://www.bookboost.io/terms-conditions" className="hover:underline "> I accept the Terms of Service</a> 
                      </label4>
                    </div>
                
                    <button
                      className={`bg-green-500 text-white py-2 px-4 rounded-md mt-8 ${
                        !termsAccepted && "opacity-50 cursor-not-allowed"
                      }`}
                      onClick={handleSubmit}
                      disabled={!termsAccepted}
                    >
                      Save preference
                    </button>
  </div>
</div>
);
}

export default PromotionalOffersForm;
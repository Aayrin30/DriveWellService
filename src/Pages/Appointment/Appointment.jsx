import React, { useEffect, useState } from "react";
import { ScheduleMeeting } from "react-schedule-meeting";
import { format } from "date-fns";
export default function Appointment() {
  const companies = [
    {
      name: "Company A",
      models: ["Model A1", "Model A2", "Model A3"],
    },
    {
      name: "Company B",
      models: ["Model B1", "Model B2", "Model B3"],
    },
  ];
  const [formData, setFormData] = useState({
    companySelect: "",
    vehicleNumber: "",
    modelSelect: "",
    services: [],
    instruction: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    city: "",
    pinCode: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      companySelect: "",
      vehicleNumber: "",
      modelSelect: "",
      services: [],
      instruction: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      city: "",
      pinCode: "",
    });
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // For checkbox inputs, toggle selected services
    if (type === "checkbox") {
      // Copy the previous services array
      const updatedServices = [...formData.services];
      if (checked) {
        // Add the selected service
        updatedServices.push(value);
      } else {
        // Remove the deselected service
        const index = updatedServices.indexOf(value);
        if (index > -1) {
          updatedServices.splice(index, 1);
        }
      }
      // Update the state with the new services array
      setFormData((prevFormData) => ({
        ...prevFormData,
        services: updatedServices,
      }));
    } else {
      // For other inputs, update the corresponding field in formData
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const availableTimeslots = [0, 1, 2, 3, 4, 5]
    .map((id) => {
      const currentDate = new Date();
      const newDate = new Date(currentDate.setDate(currentDate.getDate() + id));

      if (newDate.getDay() !== 0) {
        return {
          id,
          startTime: new Date(newDate.setHours(9, 0, 0, 0)),
          endTime: new Date(newDate.setHours(17, 0, 0, 0)),
        };
      }
      return null;
    })
    .filter((timeslot) => timeslot !== null);
  const handleTimeslotClicked = (startTimeEventEmit) => {
    startTimeEventEmit.resetDate();
    startTimeEventEmit.resetSelectedTimeState();
    alert(
      `Time selected: ${format(
        startTimeEventEmit.startTime,
        "hh:mm:ss b dd/LL/yyyy"
      )}`
    );
  };
  const typeOfService = [
    "CAR WASHING",
    "CAR PAINTING",
    "ENGINE DIAGNOSTICS",
    "CAR DENTING",
    "LUBE,OIL & FILTERS",
    "BREAK REPAIR & WHEEL SERVICES",
  ];
  return (
    <div className="w-[95%] bg-[#F5F5F5] p-20 m-20 mt-52 z-[-10] text-[18px] ">
      <h1 className="text-[30px] font-bold text-center">
        Car Service Booking Form
      </h1>
      <hr className="h-px my-8 bg-black border-2 " />

      <div className="flex gap-4">
        <div className="w-full">
          <form
            className="p-4 flex flex-col justify-center gap-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-[18px] font-bold ml-6">
                Select an Appointment Date
              </h2>
              <ScheduleMeeting
                borderRadius={10}
                primaryColor="#3f5b85"
                eventDurationInMinutes={50}
                onStartTimeSelect={handleTimeslotClicked}
                availableTimeslots={availableTimeslots}
              />
            </div>
            <div className="w-full flex gap-10 ">
              <div className="w-[50%] flex flex-col gap-3">
                <div className="flex flex-col gap-2 ml-6">
                  <label
                    htmlFor="vehicleNumber"
                    className="block text-[18px] font-bold "
                  >
                    Vehicle Number:
                  </label>
                  <input
                    type="text"
                    name="vehicleNumber"
                    value={formData.vehicleNumber}
                    onChange={handleChange}
                    className="text-[18px] w-[100%] bg-white rounded-md text-[gray] h-[30px] focus:border-[2px] focus:border-black pl-2 "
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 ml-6">
                  <label
                    htmlFor="companySelect"
                    className="block text-[18px] font-bold "
                  >
                    Company:
                  </label>
                  <select
                    value={formData.companySelect}
                    onChange={handleChange}
                    name="companySelect"
                    className="border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5 bg-white"
                  >
                    <option value="">Select Company</option>
                    {companies.map((company, index) => (
                      <option key={index} value={company.name}>
                        {company.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2 ml-6">
                  <label
                    htmlFor="modelSelect"
                    className="block text-[18px] font-bold"
                  >
                    Select Model:
                  </label>
                  <select
                    name="modelSelect"
                    value={formData.model}
                    onChange={handleChange}
                    disabled={!formData.companySelect}
                    className="disabled:opacity-60 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white  disabled:cursor-not-allowed"
                  >
                    <option value="">Select Model</option>
                    {(
                      companies.find(
                        (company) => company.name === formData.companySelect
                      )?.models || []
                    ).map((model, index) => (
                      <option key={index} value={model}>
                        {model}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="">
                <h2 className="text-[20px] font-bold mb-2">Type of Services</h2>
                {typeOfService.map((service, index) => (
                  <div key={index} className="flex gap-2 items-center mb-2">
                    <input
                      type="checkbox"
                      name="services"
                      className="h-[18px] w-[18px]"
                      value={service}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="services"
                      className="text-[18px] font-bold "
                    >
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 w-full flex flex-col gap-3">
              <h2 className="text-[20px] font-bold mb-2">
                Any Special Instructions
              </h2>
              <textarea
                name="instruction"
                onChange={handleChange}
                value={formData.instruction}
                className="w-full rounded-[10px] p-4 resize-none"
                rows="6"
              />
            </div>
            <div className="">
              <h1 className="text-[30px] font-bold mb-4">
                Customer Information
              </h1>
              <hr className="h-px my-8 bg-black border-2 " />
              <div className="flex gap-3 mb-4">
                <div className="w-[50%] flex flex-col gap-2 ml-6">
                  <label
                    htmlFor="firstName"
                    className="block text-[18px] font-bold "
                  >
                    First Name:
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    value={formData.firstName}
                    className="text-[18px] w-[100%] bg-white rounded-md text-[gray] h-[30px] focus:border-[2px] focus:border-black pl-2 "
                    required
                  />
                </div>
                <div className="w-[50%] flex flex-col gap-2 ml-6">
                  <label
                    htmlFor="lastName"
                    className="block text-[18px] font-bold "
                  >
                    Last Name:
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    value={formData.lastName}
                    className="text-[18px] w-[100%] bg-white rounded-md text-[gray] h-[30px] focus:border-[2px] focus:border-black pl-2 "
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-[50%] flex flex-col gap-2 ml-6">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-[18px] font-bold "
                  >
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    onChange={handleChange}
                    value={formData.phoneNumber}
                    name="phoneNumber"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 ml-6 mb-4">
                  <label
                    htmlFor="address"
                    className="block text-[18px] font-bold "
                  >
                    Address:
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="text-[18px] w-[100%] bg-white rounded-md text-[gray] h-[30px] focus:border-[2px] focus:border-black pl-2 "
                    required
                  />
                </div>
              </div>
              <div className="flex gap-3 mb-4">
                <div className="w-[50%] flex flex-col gap-2 ml-6">
                  <label
                    htmlFor="city"
                    className="block text-[18px] font-bold "
                  >
                    City:
                  </label>
                  <input
                    type="text"
                    name="city"
                    onChange={handleChange}
                    value={formData.city}
                    className="text-[18px] w-[100%] bg-white rounded-md text-[gray] h-[30px] focus:border-[2px] focus:border-black pl-2 "
                    required
                  />
                </div>
                <div className="w-[50%] flex flex-col gap-2 ml-6">
                  <label
                    htmlFor="pincode"
                    className="block text-[18px] font-bold "
                  >
                    Pincode:
                  </label>
                  <input
                    type="text"
                    name="pinCode"
                    onChange={handleChange}
                    value={formData.pinCode}
                    className="text-[18px] w-[100%] bg-white rounded-md text-[gray] h-[30px] focus:border-[2px] focus:border-black pl-2 "
                    required
                  />
                </div>
              </div>
            </div>
            <hr className="h-px my-8 bg-black border-2 " />
            <button className="block mx-auto btn h-[50px] w-[180px]">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

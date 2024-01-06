import React, { useState, useEffect } from 'react';
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";
// import "./Navbar.css";

const Navbar = ({ setGroup, setOrder }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [savedGroup, setSavedGroup] = useState('status'); // Initialize with default value
  const [savedOrder, setSavedOrder] = useState('priority'); // Initialize with default value

  useEffect(() => {
    const groupFromStorage = localStorage.getItem('savedGroup') || 'status';
    const orderFromStorage = localStorage.getItem('savedOrder') || 'priority';

    setSavedGroup(groupFromStorage);
    setSavedOrder(orderFromStorage);
    setGroup(groupFromStorage);
    setOrder(orderFromStorage);
  }, [setGroup, setOrder]);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="h-10 w-auto flex items-center p-3 m-0 bg-white relative ">
      <button className="flex items-center justify-between px-5 bg-gray-100 text-black rounded-md shadow-md cursor-pointer transition duration-300 ease-in-out border border-black" onClick={toggleDropdown}>
        <span className='my-2'><HiOutlineAdjustmentsHorizontal /></span>
        <span>Display</span>
        <span><RiArrowDropDownLine /></span>
      </button>
      {isDropdownVisible && (
        <div className="w-250 h-20 rounded-lg absolute m-2 top-full left-20 z-10 bg-gray-100 border border-gray-300 pt-1 px-4 shadow-md">
          <form>
            <div className="flex justify-between mb-3 text-gray-600">
              <label htmlFor="dropdown1">Grouping</label>
              <select className='w-90 pl-3 rounded-md border border-gray-300 bg-white transition duration-300 ease-in-out' id="dropdown1" onChange={(e) => { setGroup(e.target.value); }}>
                <option value="status" selected={savedGroup === 'status'}>Status</option>
                <option value="userId" selected={savedGroup === 'userId'}>User</option>
                <option value="priority" selected={savedGroup === 'priority'}>Priority</option>
              </select>
            </div>
            <div className="flex justify-between mb-3 text-gray-600">
              <label htmlFor="dropdown2">Ordering</label>
              <select className='w-90 pl-3 rounded-md border border-gray-300 bg-white transition duration-300 ease-in-out' id="dropdown2" onChange={(e) => { setOrder(e.target.value); }}>
                <option value="priority" selected={savedOrder === 'priority'}>Priority</option>
                <option value="title" selected={savedOrder === 'title'}>Title</option>
              </select>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Navbar;
// import React, { useState, useEffect } from 'react';
// import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import "./Navbar.css";

// const Navbar = ({ setGroup, setOrder }) => {
//   const [isDropdownVisible, setDropdownVisible] = useState(false);
//   const [savedGroup, setSavedGroup] = useState('status'); // Initialize with default value
//   const [savedOrder, setSavedOrder] = useState('priority'); // Initialize with default value

//   useEffect(() => {
//     const groupFromStorage = localStorage.getItem('savedGroup') || 'status';
//     const orderFromStorage = localStorage.getItem('savedOrder') || 'priority';

//     setSavedGroup(groupFromStorage);
//     setSavedOrder(orderFromStorage);
//     setGroup(groupFromStorage);
//     setOrder(orderFromStorage);
//   }, [setGroup, setOrder]);

//   const toggleDropdown = () => {
//     setDropdownVisible(!isDropdownVisible);
//   };

//   return (
//     <div className="navbar-container">
//       <button className="display-button" onClick={toggleDropdown}>
//         <span><HiOutlineAdjustmentsHorizontal /></span>
//         <span>Display</span>
//         <span><RiArrowDropDownLine /></span>
//       </button>
//       {isDropdownVisible && (
//         <div className="dropdown">
//           <form>
//             <div className="form-row">
//               <label htmlFor="dropdown1">Grouping</label>
//               <select id="dropdown1" onChange={(e) => { setGroup(e.target.value); }}>
//                 <option value="status" selected={savedGroup === 'status'}>Status</option>
//                 <option value="userId" selected={savedGroup === 'userId'}>User</option>
//                 <option value="priority" selected={savedGroup === 'priority'}>Priority</option>
//               </select>
//             </div>
//             <div className="form-row">
//               <label htmlFor="dropdown2">Ordering</label>
//               <select id="dropdown2" onChange={(e) => { setOrder(e.target.value); }}>
//                 <option value="priority" selected={savedOrder === 'priority'}>Priority</option>
//                 <option value="title" selected={savedOrder === 'title'}>Title</option>
//               </select>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

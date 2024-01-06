

import React from "react";
// import "./Card.css";


function Card({ ticket, group }) {
  return (
    <div className="bg-white cursor-pointer border border-gray-300 rounded-lg shadow-md p-4 mb-4 flex justify-between h-90 w-60 transition duration-300 ease-in-out">
      <div className="flex flex-col justify-between">
        <div>
          <span className="light-font">{ticket.id}</span>
        </div>
        <div className="flex items-start">
          {group !== "status" && (
            <span className="mr-1">
              {ticket.statusIcon &&
                React.createElement(ticket.statusIcon, {
                  className: "icons-class text-sm my-0",
                })}
            </span>
          )}
          <span className="text-sm font-semibold">{ticket.title}</span>
        </div>
        <div className="flex items-center">
          {group !== "priority" && (
            <span className="rounded-lg flex justify-center items-center mr-1 p-1 border border-gray-300">
              {ticket.priorityIcon &&
                React.createElement(ticket.priorityIcon, {
                  className: "text-lg",
                })}
            </span>
          )}
          <span className="rounded-lg flex justify-center items-center mr-1 p-1 border border-gray-300">{ticket.tag}</span>
        </div>
      </div>
      <div className="flex flex-col justify-start items-end">
        {group !== "userId" && (
          <span>
            {ticket.userIcon &&
              React.createElement(ticket.userIcon, {
                className: "text-lg",
              })}
          </span>
        )}
      </div>
    </div>
  );
}

export default Card;


import React from "react";

function Services(serviceImg , title) {
  return (
    <>
      <div className="flex gap-2 pb-3">
        <img src="serviceImg" />
        <p>Online Order</p>
      </div>
    </>
  );
}

export default Services;
import React from "react";

const Payment9 = () => {
  return (
    <div>
      <div className="textColor text-center mt-5 ">
        <p className=" fs-5">Payment of</p>
        <h1 className=" fw-bolder h1" style={{ fontSize: "100px" }}>
          $900
        </h1>
      </div>
      <div className="p-5">
        <div className="row textColor">
          <div className="col-10">Required mortgage insurance</div>
          <div className="col-2 fw-semibold ">$19,000</div>
        </div>
        <div className="row my-2">
          <div className="col-10">Total mortgage required</div>
          <div className="col-2 fw-semibold">$494,000</div>
        </div>
        <div className="row ">
          <div className="col-10">Interest Paid over term</div>
          <div className="col-2 fw-semibold">$126,077</div>
        </div>
        <div className="row my-2">
          <div className="col-10">Principal paid over term</div>
          <div className="col-2 fw-semibold">$53,809</div>
        </div>
        <div className="row ">
          <div className="col-10">Balance at end of term</div>
          <div className="col-2 fw-semibold">$440,190</div>
        </div>
      </div>
      <div className="text-center mb-5">
        <button className=" text-uppercase backgroundColor border-0 p-2 fw-semibold text-light rounded fs-5 px-3">
          apply now
        </button>
      </div>
    </div>
  );
};

export default Payment9;

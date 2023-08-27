import React from "react";

const Purchase = () => {
  return (
    <div>
      <div  className="row position-relative responsive">
        <div className="py-3 px-4 col-6 " id="right">
          <h3 className=" fw-semibold textColor">Determine Your Payment</h3>
          <p className=" fw-medium">Home Purchase Price</p>
          <div className="input-group mb-3 ">
            <div className="input-group-prepend">
              <span
                className="input-group-text rounded-end-0"
                id="basic-addon1"
              >
                $
              </span>
            </div>
            <input
              type="text"
              className="form-control rounded-end-1"
              placeholder="500,00"
              ariaDescribedBy="basic-addon1"
              ariaLabel="$"
            />

            <select className="select w-100 bg-light-subtle rounded py-1 my-2">
              <option value="$100">$100</option>
              <option value="$200">$200</option>
              <option value="$300">$300</option>
              <option value="$400">$400</option>
              <option value="$500">$500</option>
              <option value="$600">$600</option>
              <option value="$700">$700</option>
              <option value="$800">$800</option>
              <option value="$900">$900</option>
              <option value="$1000">$1000</option>
            </select>
          </div>
          <p className=" fw-medium">
            Down Payment [If down payment is $0, use Switch / Renew]
          </p>
          <h2 className="fw-bold">$25,000</h2>
          <div className="py-2 d-flex gap-3">
            <button className="p-1 backgroundColor border-0 rounded text-light px-2">
              Minimum <span className="fw-bold">5%</span>
            </button>
            <button
              style={{ backgroundColor: "#8080807d" }}
              className=" text-light border-0 rounded p-1"
            >
              20%
            </button>
            <button
              style={{ backgroundColor: "#8080807d" }}
              className="bg-link text-light border-0 rounded p-1"
            >
              Custom
            </button>
          </div>
          <div className="row mt-2">
            <div className="col w-50">
              <label htmlFor="selectOption">Mortgage Term</label>
              <br />
              <select className="select w-100 bg-light-subtle rounded py-1 my-2">
                <option value="5Y">5 Year Fixed</option>
                <option value="4Y">4 Year</option>
                <option value="3Y">3 Year</option>
                <option value="2Y">2 Year</option>
                <option value="1Y">1 Year</option>
              </select>
            </div>
            <div className="col w-100">
              <label htmlFor="selectOption">Mortgage Rate</label>
              <br />
              <div className="input-group mt-2 ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="5.44"
                  ariaDescribedBy="basic-addon1"
                  ariaLabel="%"
                />
                <div className="input-group-prepend">
                  <span
                    className="input-group-text  rounded-start-0"
                    id="basic-addon1"
                  >
                    %
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col ">
              <label htmlFor="selectOption">Payment Frequency</label>
              <br />
              <select className="select w-100 bg-light-subtle rounded py-1 my-2">
                <option value="5Y">5 Year Fixed</option>
                <option value="4Y">4 Year</option>
                <option value="3Y">3 Year</option>
                <option value="2Y">2 Year</option>
                <option value="1Y">1 Year</option>
              </select>
            </div>
            <div className="col w-50 input-control">
              <label htmlFor="selectOption">Amortization Period</label>
              <br />
              <select className="select w-100 bg-light-subtle rounded py-1 my-2 ">
                <option value="5Y">5 Year Fixed</option>
                <option value="4Y">4 Year</option>
                <option value="3Y">3 Year</option>
                <option value="2Y">2 Year</option>
                <option value="1Y">1 Year</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-6 px-4 h-100 " id="left">
          <div className="textColor text-center mt-5 ">
            <p className=" fs-5">Payment of</p>
            <h1 className=" fw-bolder h1" style={{fontSize:"100px"}}>$2998</h1>
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
      </div>

      <div className="px-2 py-1 mt-10 w-100 rounded text-end backgroundColor">
        Download Schedule as .PDF
      </div>
    </div>
  );
};

export default Purchase;

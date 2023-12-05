import React from "react";
import "./Donation.css";

function Donation() {
    return (
    <div className="container b-example-divider">
      <div id="flip" className="row">
        <div className="col-4">
          <h3>Donate</h3>
          <br/>
        </div>
      </div>
      <form id="panel" className="row g-3 border border-black">
        <div className="col-md-5">
          <label for="validationDefault01" className="form-label">Name</label>
          <input type="text" className="form-control" id="validationDefault01" required/>
        </div>
        <div className="col-md-3">
          <label for="validationDefaultUsername" className="form-label">Cellphone</label>
          <div className="input-group">
            <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2"
              required/>
          </div>
        </div>
        <div className="col-md-3">
          <label for="validationDefaultUsername" className="form-label">Email</label>
          <div className="input-group">
            <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2"
              required/>
          </div>
        </div>
        <div className="col-md-3">
          <label for="validationDefault05" className="form-label">Select Donation</label>
          <select className="form-select" id="validationDefault04" required>
            <option selected disabled value="">Choose...</option>
            <option>$250</option>
            <option>$350</option>
            <option>$500</option>
          </select>
        </div>
        <div className="col-md-3">
          <label for="validationDefaultUsername" className="form-label">Other</label>
          <div className="input-group">
            <input type="number" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2"
              required/>
          </div>
        </div>
        <div className="col-md-3">
          <label for="validationDefaultUsername" className="form-label">Credit card</label>
          <div className="input-group">
            <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2"
              required/>
          </div>
        </div>
        <div className="col-md-3">
          <label for="validationDefaultUsername" className="form-label">CVV</label>
          <div className="input-group">
            <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2"
              required/>
          </div>
        </div>
        <div className="col-md-3">
          <label for="validationDefaultUsername" className="form-label">Expiration date</label>
            <div className="input-group">
              <input type="date" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2"
                required/>
            </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
            <label className="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Submit information</button>
        </div>
      </form>
      </div>
    );
    }


export default Donation;

import React from "react";
import Popup from "reactjs-popup";
import "./closeClaim.css";

const Settle = () => {
    return (
        <Popup trigger={<button className="closeClaim"> Settle Claim</button>} modal>
           {close => (
              <div className="modal">
                  <a className="close" onClick={close}>
                      &times;
          </a>
                  <div className="header">
                  Alert </div>
                  <div className="reject">
                      <p className="confirmation">Are you sure this claim is SETTLED?</p>
          </div>
                  <div className="actions">

                      <button   className="button-green" onClick={() => {close();}}>Yes </button>
                      <button className="button-red" onClick={() => {close();}}>Cancel </button>
                  </div>
              </div>
          )}
        </Popup>
    );
}
export default Settle
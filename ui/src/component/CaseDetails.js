import React, { Component } from "react";
import { Link } from 'react-router-dom';



const CaseDetails = () => {
    return (

        <div className="row2">
            <div className="caseDetails">
                <h3>Details</h3>
                <div className="divider">

                    <h5>Case Number</h5>
                    <p>1001</p>
                    <h5>Claimant Name</h5>
                    <p>Ameerul Salahudeen</p>
                    <h5>Status</h5>

                    <p>Suspicious</p>
                </div>

                <div className="divider">
                    <h5>Comments</h5>
                    <p>Ameerul has been in 2 previous fraudulent claims</p>
                    <p>The accident happened at night </p>
                    <p>vehicle had 3 previous accident</p>
                </div>

            </div>
            <div className="caseDetails">
                <div className="task">
                    <h3>Tasks</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget</p>
                </div>
                <div className="actions">

                    <button className="button-red">
                        Fraud Detected</button>
                    <button className="button-green">
                        Resolve Investigation</button>
                </div>
            </div>

        </div>
    )
}

export default CaseDetails
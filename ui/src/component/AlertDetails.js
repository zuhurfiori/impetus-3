import React, { Component } from "react";
import { graphql } from 'react-apollo';
import { getClaimQuery } from '../queries/queries.js';
import "./openedClaim.css";


const AlertDetails= () => {
    return (
        
                <div className="row">
                    <div className="column">
                        <div className='network'><h2>Network</h2></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
                    </div>
        
                    <div className="columnWhite">
                        <div className='claimDetail'>
                            <h2>Claim Details</h2>
                        </div>
                        <table >
        
                            <tr>
                                <td><h6>Claim Id</h6>
                                    <p> 1001</p>
                                </td>
        
                                <td><h6>Claimant Name</h6>
                                    <p> Ameerul Salahudin</p>
                                </td>
                            </tr>
                            <tr>
                                <td><h6>Reported Date</h6>
                                    <p> 11/10/2019</p>
                                </td>
        
                                <td><h6>Telephone Number</h6>
                                    <p> 01993485</p>
                                </td>
        
                            </tr>
                            <tr>
                                <td><h6>IC Number</h6>
                                    <p> K02948332</p>
                                </td>
        
                                <td><h6>Value</h6>
                                    <p> RM2300</p>
                                </td>
        
                            </tr>
                            <tr>
                                <td><h6>Status</h6>
                                    <p>Open</p>
                                </td>
        
                                <td><h6>Police Reference #</h6>
                                    <p> HRF2434D3</p>
                                </td>
                            </tr>
                            <tr>
                                <td><h6>Description</h6>
                                    <p>The drive hit the car</p>
                                </td>
                            </tr>
        
                        </table>
                    </div>
        
                    <div className="column">
                        <div className='scoreCardRed'>
                            <h2>Score Card</h2>
                            <h2>500</h2>
                        </div>
        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
                    </div>
                </div>
            )
        }

export default AlertDetails
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import CaseDetails from './CaseDetails.js';
import AlertDetails from './AlertDetails.js';
import Workshop from './Workshop.js';
import Location from './Location.js';
import Dropdown from './AlertHamburgerB.js';
import { Link } from 'react-router-dom';
import "./openedCase.css";



class OpenCase extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="OpenedClaim">

                    <button className="claimId">
                        <button className="openedClaimId"> 1001</button>
                        <Link to='/AlertList'>
                            <p class="x">X</p>
                        </Link></button>
                </div>
                <span className="tab">
                    <Tabs>
                        <TabList>
                            <div className="blank">
                            <h1></h1></div>
                            <Tab ><h4>Case Details</h4></Tab>
                            <Tab><h4>Alert Details</h4></Tab>
                            <Tab><h4>Workshop</h4></Tab>
                            <Tab><h4>Location View</h4></Tab>
                        </TabList>
                        <TabPanel>
                            <CaseDetails />
                        </TabPanel>
                        <TabPanel>
                            <AlertDetails />
                        </TabPanel>
                        <TabPanel>
                            <Workshop />
                        </TabPanel>
                        <TabPanel>
                            <Location />
                        </TabPanel>
                    </Tabs>
                </span>
            </div>
        )
    }
}
export default OpenCase
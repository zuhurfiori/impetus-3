import React from 'react';
import "./hamburgerB.css";
import Reject from "./RejectClaimpu";
import Settle from "./SettleClaimpu";


class Dropdown extends React.Component {

  // hamburgur dropdown display
    constructor(){
     super();
    
     this.state = {
           displayMenu: false,
         };
    
      this.showDropdownMenu = this.showDropdownMenu.bind(this);
      this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    
    };
    
    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
      }
    
      hideDropdownMenu(event) {
        if (!this.dropdownMenu.contains(event.target)){
        this.setState({ displayMenu: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu);
        });
    
      }
    }
    
      render() {
        return (
            <div  className="dropdown">
             <button className="ham" onClick={this.showDropdownMenu}></button>
    
              { this.state.displayMenu ? (
              <div className="dropChoices"
              ref={(element) => {
                this.dropdownMenu = element;
              }}>
             <Settle/>
             <Reject/>
          
              </div>
            ):
            (
              null
            )
            }
    
           </div>
    
        );
      }
    }
    
    export default Dropdown;
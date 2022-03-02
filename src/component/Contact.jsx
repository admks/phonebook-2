import React, { Component } from "react";
import List from "./List";
import Form from "./Form";

export default class Contact extends Component {
  state = {
    contacts: [
      { name: "Name 1", phone: "+123456789" },
      { name: "Name 2", phone: "+123456780" },
      { name: "Name 3", phone: "+123456781" },
      { name: "Name 4", phone: "+123456782" },
      { name: "Name 5", phone: "+123456783" },
      { name: "Name 6", phone: "+123456783" },
    ],
    age:12,
    order:"5000",
    surname:32323,
  };
  render() {
    const addContact = (data) => {
      console.log("PARENT-2-addContact  PARAMS:",data);
      const contactsData=this.state.contacts
      // console.log("contact OLD:::",contacts)

      contactsData.push(data)
      // console.log("contact NEW:::",contacts)
      
      
      this.setState({contacts:contactsData})


    };
    // console.log("contact.js state::::",this.state)
    const chngState = (e) => {
      this.setState({age:1111111111})
    
    };
    return (
      <div>
        <h1>PHONEBOOK</h1>
        <List contacts={this.state.contacts} />
        <Form addContact={addContact} />
        {/* <button onClick={chngState}>CHANGE CONTACT.JS STATE</button> */}
      </div>
    );
  }
}

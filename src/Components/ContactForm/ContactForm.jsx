import { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    phoneNumber: "",
  };

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleChangePhone = (event) => {
    this.setState({
      phoneNumber: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("In handleSubmit");
    this.props.onAddContact(this.state);
    console.log("state:", this.state);
    this.setState({ name: "", phoneNumber: "" });
  };
  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <div className={styles.inputWrapper}>
          <input className = {styles.input}
            type="text"
            name="name"
            placeholder = "Name"
            value={this.state.name}
            onChange={this.handleChangeName}
            required
          />

          <input className = {styles.input}
            type="tel"
            name="number"
            placeholder = "Phone number"
            value={this.state.phoneNumber}
            onChange={this.handleChangePhone}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Phone number should be 11-12 digits and can contain numbers, spaces, braces, dashes and start with +"
            required
          />
        </div>

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
        >
          Add contact
        </Button>
      </form>
    );
  }
}

export default ContactForm;

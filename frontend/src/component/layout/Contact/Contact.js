import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="https://www.youtube.com">
        <Button>Contact: aggdiv@.com</Button>
      </a>
    </div>
  );
};

export default Contact;
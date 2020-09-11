import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();

  const [info, setInfo] = useState({
    fullName: "edwin",
    email: "@",
    message: "///",
    disabled: false,
    emailSent: null
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = e.type === 'checkbox' ? target.checked : target.value;
    const name = target.name
    setInfo({[name]: value})  
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo({disabled: true})
  };

  return (
    <div id="contact" className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Work with us</h2>
          <h4 className={classes.description}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </h4>
          <form onSubmit={handleSubmit}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  inputProps={{
                  onChange: handleChange,
                  value: info.fullName,
                  name: "fullName" }}
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  inputProps={{
                  onChange: handleChange,
                  value: info.email,
                  name: "email" }}
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                  onChange: handleChange,
                  value: info.message,
                  name: "message"
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary" type="submit" disabled={info.disabled}>Send Message</Button>
              </GridItem>
            </GridContainer>
            {/* {emailSent === true && <} */}
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}

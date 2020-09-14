import React, { useState } from "react";
import Axios from 'axios';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Check from '@material-ui/icons/Check';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();

  const [info, setInfo] = useState({
    fullName: "",
    email: "",
    message: "",
    disabled: false,
    emailSent: null
  });

  const handleChange = (e) => {
    let cinfo = {...info}
    const target = e.target;
    const value = e.type === 'checkbox' ? target.checked : target.value;
    const name = target.name
    cinfo[name]= value
    setInfo(cinfo)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo({disabled: true})

    Axios.post('http://localhost:8080/api/email', info)
      .then(res => {
        if(res.data.success) {
          console.log(res.data.success)
          console.log("Worked!")
          setInfo({
            disabled: false,
            emailSent: true
          });
        } else {
          setInfo({
            disabled: false,
            emailSent: false
          });
        }
      })
      .catch(err => {
        console.log(err);

        setInfo({
          disabled: false,
          emailSent: false
        });
      })
  };

  return (
    <div id="contact" className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contact Me</h2>
          <h4 className={classes.description}>
            I look forward to hearing from you. 
            If you would like to contact me please send me a message below.
          </h4>
          <form onSubmit={handleSubmit}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelProps={{shrink: true}}
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
                  labelProps={{shrink: true}}
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
                labelProps={{shrink: true}}
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
            {info.emailSent === true && <SnackbarContent  message={<span><b>ALERT:</b> EMAIL SENT!</span> } close color="success" icon={Check}/>}
            {info.emailSent === true && <SnackbarContent  message={<span><b>ALERT:</b> EMAIL NOT SENT!</span> } close color="danger" icon="info_outline"/>}
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}

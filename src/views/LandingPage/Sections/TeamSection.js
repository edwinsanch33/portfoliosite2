import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";


// import team2 from "assets/img/faces/christian.jpg";
import edwin from "assets/img/faces/GPPHeadshot.jpg"


const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Your Pick for the Team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={edwin} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Edwin Sanchez
                <br />
                <small className={classes.smallTitle}>Software Developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Hello again, I would like to bring my skills and work ethic to your company. 
                Follow this link to <a href="/profile-page">here </a> or above to see more about me. 
                Download my resume <a href="/">here</a> also.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://github.com/edwinsanch33/"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
                <Button
                  href="https://www.linkedin.com/in/edwinsanchez33/"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

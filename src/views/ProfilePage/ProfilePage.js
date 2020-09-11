import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

// import profile from "assets/img/faces/christian.jpg";
import profile from "assets/img/faces/GPPHeadshot.jpg"

import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";
import hobbie1 from "assets/img/examples/Cleats:field.jpg";
import hobbie2 from "assets/img/examples/Snowmass.jpg";
import hobbie3 from "assets/img/examples/YanomamiTeam.jpg";
import hobbie4 from "assets/img/examples/Fixie.jpg";
import hobbie5 from "assets/img/examples/YanomamiSolo.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="EDWIN SANCHEZ"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Edwin Sanchez</h3>
                    <h6>DEVELOPER</h6>
                    <Button
                      href="https://github.com/edwinsanch33/"
                      target="_blank"
                      justIcon 
                      link 
                      className={classes.margin5}>
                      <i className={" fab fa-github"} />
                    </Button>
                    <Button 
                      href="https://www.linkedin.com/in/edwinsanchez33/"
                      target="_blank"
                      justIcon 
                      link 
                      className={classes.margin5}>
                      <i className={" fab fa-linkedin"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Hello! My name is Edwin Sanchez. I'm a Full Stack Web Developer. 
                I graduated from Wyncode Academy in August 2019. 
                This was a full-time program for 10 weeks where as a student I was challenged to learn multiple programming languages and frameworks. 
                Included were HTML, CSS, JavaScript, and Ruby; working in frameworks such as React.js, Node.js, Express, Ruby/React on Rails. 
                I was fortunate to start my program concurrently with a UX/UI cohort which meant many opportunities to collaborate. We worked on two major projects in this course. 
                This dynamic gave me more interest and excitement to become a member of a team for future projects. 
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="info"
                  tabs={[
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Hobbies",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={hobbie1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={hobbie2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={hobbie3}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={hobbie4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={hobbie5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

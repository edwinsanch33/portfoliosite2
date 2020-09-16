import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// import Chat from "@material-ui/icons/Chat";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
// import Fingerprint from "@material-ui/icons/Fingerprint";
// @mdi/font icons
import  { mdiLanguageRuby }  from '@mdi/js';
import { mdiXml } from '@mdi/js';
import { mdiReact } from '@mdi/js';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2  id="skills" className={classes.title}>Skills</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Front-End"
              description={["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Material UI", "Material Design"]}
              path={mdiReact}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Essentials"
              description={["GitHub", "UX/UI Collaboration", "Adobe Xd", "Test Driven Development", "WordPress", "PHP"]}
              path={mdiXml}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Back-End"
              description={["Ruby", "Ruby on Rails", "PostgreSQL", "Express", "Node" ]}
              path={mdiLanguageRuby}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

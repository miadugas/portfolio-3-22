import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hero from './ui/Hero';
import Tech from './ui/Tech';
import Portfolio from './ui/Portfolio';
import CallToAction from "./ui/CallToAction";

import techBackground from '../assets/repeatingBackground.svg';

import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';

const useStyles = makeStyles((theme) => ({
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  mainContainer: {
    // marginTop: "5em",
    [theme.breakpoints.down('md')]: {
      // marginTop: "3em"
    },
    [theme.breakpoints.down('xs')]: {
      //marginTop: "2em"
    },
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  // serviceContainer: {
  //   marginTop: "12em",
  //   [theme.breakpoints.down("sm")]: {
  //     padding: 25
  //   }
  // },
  techBackground: {
    backgroundImage: `url(${techBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  techCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: '100%',
    },
    infoBackground: {
      backgroundImage: `url(${infoBackground})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100%',
      width: '100%',
    },
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      className={classes.mainContainer}
    >
      {/*-----Hero-----*/}
      <Hero />
      {/*-----Tech-----*/}
      <Tech />
      {/*-----Portfolio-----*/}
      <Portfolio />
      <Grid item>
        {/*-----Call To Action Block-----*/}
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}

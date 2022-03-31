import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CallToAction from "./ui/CallToAction";
//import Hidden from '@material-ui/core/Hidden';

import about from '../assets/repeatingBackground.svg';
import rocket from '../assets/rocket.svg';
import mia from '../assets/mia.jpeg';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${about})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.4
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
  avatar: {
    height: '15em',
    width: '15em',
    [theme.breakpoints.down('sm')]: {
      height: '20em',
      width: '20em',
      maxHeight: 300,
      maxWidth: 300,
    },
  },
  specialText: {
    fontFamily: 'Montserrat',
    fontWeight: 900,
    fontSize: '1.5rem',
    color: theme.palette.common.red,
  },
}));

export default function About(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.background}
    >
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? '1em' : '2em' }}
      >
        <Typography
          align={matchesMD ? 'center' : undefined}
          variant="h1"
        >
          About Me
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify="center"
        className={classes.rowContainer}
        style={{ marginTop: '3em' }}
      >
        <Typography
          variant="subtitle2"
          align="center"
          
        >
          I create aesthetically pleasing, highly functional Front end
          & Full stack components. Whether it be person to person. or
          business to consumer, technology is meant to bring us closer
          to what we care about in the best way possible. I use that
          principle to provide fast, modern, inexpensive, and
          aesthetic software to the Mountain region and beyond.
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ marginTop: '5em', marginBottom: '5em' }}
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        justify="space-between"
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: '35em' }}
          >
            <Grid item>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant="h1"
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align={matchesMD ? 'center' : undefined}
                paragraph
                style={{ fontSize: '1.5rem', fontWeight: 900 }}
              >
                Do more with less
              </Typography>
              <Typography
                variant="subtitle2"
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                I started developing fulltime in 2018, and it all started with
                one fact & one question:
                <br />
                <span className={classes.specialText}> Fact: </span>
                Cell phones today have 100,000 time more
                processing power than the Apollo 11 computer. 
                <br />
                <span className={classes.specialText}> Question: </span>
                So why
                aren’t all businesses using available technology?
                <br />
                There are many different answers to that question:
                economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                align={matchesSM ? 'center' : undefined}
                variant="subtitle2"
                gutterBottom
              >
                I create successful responsive websites that are fast,
                easy to use, and built with best practices with an
                agile methodology. The main area of my expertise is
                front-end development, HTML, CSS, JS, React and I
                thrive at building small and medium web apps with
                custom features.
              </Typography>
              <Typography
                variant="subtitle2"
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                Recent developments in software engineering and
                computing power, compounded by the proliferation of
                smart phones, has opened up infinite worlds of
                possibility. Things that have always been done by hand
                can now be done digitally and automatically, and
                completely new methods of interaction are created
                daily. Taking full advantage of these advancements is
                the name of the game.
              </Typography>
              <Typography
                variant="subtitle2"
                align={matchesMD ? 'center' : undefined}
                paragraph
              >
                All this change can be a lot to keep up with, and
                that’s where I come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justify="center" lg>
            <img
              src={rocket}
              alt="rocket"
              style={{ maxHeight: matchesMD ? 200 : '35em' }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}

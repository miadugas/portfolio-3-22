import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//import Avatar from '@material-ui/core/Avatar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Tooltip from '@material-ui/core/Tooltip';
import CallToAction from "./ui/CallToAction";

import port from '../assets/repeatingBackground.svg';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${port})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
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
    height: '25em',
    width: '25em',
    [theme.breakpoints.down('sm')]: {
      height: '20em',
      width: '20em',
      maxHeight: 300,
      maxWidth: 300,
    },
  },
}));

export default function Portfolio(props) {
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
        {/*-----Programming Icon Block-----*/}
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : '5em',
            marginTop: matchesSM ? '1em' : '2em',
          }}
        >
          <Typography
            align={matchesSM ? 'center' : undefined}
            variant="h1"
            gutterBottom
          >
            My Technology Journey
          </Typography>

          <Typography
            align={matchesSM ? 'center' : undefined}
            variant="subtitle2"
            gutterBottom
          >
            Since beginning my journey as a developer nearly 6 years
            ago, I’ve done remote work for agencies, consulted for
            startups, and collaborated with talented people to create
            web products for both business and consumer use.
          </Typography>
          {/* <Typography
            align={matchesSM ? 'center' : undefined}
            variant="subtitle2"
            gutterBottom
          >
            I'm extremely comfortable in a variety of technology
            settings. Most of my recent work is in private repos due
            to work, NDAs, agencies, etc. In a previous life I was a
            finance professional and I love using those analytical
            skills to craft clean & efficient code. I currently work
            on an FDA cleared AI decision support platform that views
            medical imaging models in 2D and 3D. Here are a few examples of work I've done.
          </Typography> */}
        </Grid>

        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : '5em',
            marginTop: matchesSM ? '1em' : '2em',
          }}
        >
          <Typography
            align={matchesSM ? 'center' : undefined}
            variant="h1"
            gutterBottom
          >
            My Portolio
          </Typography>

          <Typography
            align={matchesSM ? 'center' : undefined}
            variant="subtitle2"
            gutterBottom
          >
            Since beginning my journey as a developer nearly 6 years
            ago, I’ve done remote work for agencies, consulted for
            startups, and collaborated with talented people to create
            web products for both business and consumer use.
          </Typography>
        </Grid>

        
        <br />
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : '5em',
            marginTop: matchesSM ? '1em' : '2em',
          }}
        >
          <Typography
            align={matchesSM ? 'center' : undefined}
            variant="h1"
            gutterBottom
          >
            My Languages, Frameworks & Tools
          </Typography>
        <Grid container style={{ fontSize: '5rem' }}>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="React" placement="bottom-end">
              <i className="devicon-react-original-wordmark"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="Redux" placement="bottom-end">
              <i className="devicon-redux-original colored"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="AngularJS" placement="bottom-end">
              <i className="devicon-angularjs-plain colored"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="Azure" placement="bottom-end">
              <i className="devicon-azure-plain colored"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="CSS3" placement="bottom-end">
              <i className="devicon-css3-plain-wordmark colored"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="Dart" placement="bottom-end">
              <i className="devicon-dart-plain-wordmark colored"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title=".NetCore" placement="bottom-end">
              <i className="devicon-dotnetcore-plain colored"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="ExpressJS" placement="bottom-end">
              <i className="devicon-express-original-wordmark colored"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="Flutter" placement="bottom-end">
              <i className="devicon-flutter-plain colored"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="Gatsby" placement="bottom-end">
              <i className="devicon-gatsby-plain colored"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="Github" placement="bottom-end">
              <i className="devicon-github-original-wordmark colored"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="Heroku" placement="bottom-end">
              <i className="devicon-heroku-plain-wordmark colored"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="Ionic" placement="bottom-end">
              <i className="devicon-ionic-original-wordmark"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="JavaScript" placement="bottom-end">
              <i className="devicon-javascript-plain colored"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="Jest" placement="bottom-end">
              <i className="devicon-jest-plain colored"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="MaterialUI" placement="bottom-end">
              <i className="devicon-materialui-plain colored"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="MongoDB" placement="bottom-end">
              <i className="devicon-mongodb-plain-wordmark colored"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="NextJS" placement="bottom-end">
              <i className="devicon-nextjs-original-wordmark colored"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="Sass" placement="bottom-end">
              <i className="devicon-sass-original colored"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="Sequelize" placement="bottom-end">
              <i className="devicon-sequelize-plain-wordmark colored"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="MS SQL Server" placement="bottom-end">
              <i className="devicon-microsoftsqlserver-plain-wordmark colored"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="VSCode" placement="bottom-end">
              <i className="devicon-vscode-plain-wordmark colored"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="Python" placement="bottom-end">
              <i className="devicon-python-plain-wordmark"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="Visual Studio" placement="bottom-end">
              <i className="devicon-visualstudio-plain-wordmark colored"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="PostgreSQL" placement="bottom-end">
              <i className="devicon-postgresql-plain-wordmark colored"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="Adobe XD" placement="bottom-end">
              <i className="devicon-xd-line colored"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="AWS" placement="bottom-end">
              <i className="devicon-amazonwebservices-plain-wordmark"></i>
            </Tooltip>
          </Grid>
          <Grid item style={{ padding: '15px' }}>
            <Tooltip title="HTML5" placement="bottom-end">
              <i className="devicon-html5-plain-wordmark colored"></i>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}

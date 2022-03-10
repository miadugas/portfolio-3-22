import { createMuiTheme } from '@material-ui/core/styles';

const miaRed = "#7D2F20";
const miaOrange = "#FF9782";
const miaGrey = "#F7F5F5";

export default createMuiTheme({
    palette: {
        common: {
        red: `${miaRed}`,
        orange: `${miaOrange}`
        },
        primary: {
          main: `${miaGrey}`
        },
        secondary: {
          main: `${miaOrange}`
        },
        frame: {
          main: 'white'
        }
      },
      typography: {
        tab: {
          fontFamily: "Raleway",
          textTransform: "none",
          fontWeight: 700,
          color: "black",
          fontSize: "1rem"
        },
        estimate: {
          fontFamily: 'Raleway',
          fontWeight: 'bold',
          fontSize: '1rem',
          textTransform: 'none',
          color: 'black'
        },
        h2: {
          fontFamily: "Raleway",
          fontWeight: 700,
          fontSize: "2.5rem",
          color: miaRed,
          lineHeight: 1.5
        },
        h3: {
          fontFamily: "Pacifico",
          fontSize: "2.5rem",
          color: miaRed
        },
        h4: {
          fontFamily: "Raleway",
          fontSize: "1.75rem",
          color: miaRed,
          fontWeight: 700
        },
        h6: {
          fontWeight: 500,
          fontFamily: "Raleway",
          color: miaRed
        },
        subtitle1: {
          fontSize: "1.25rem",
          fontWeight: 300,
          color: miaGrey
        },
        subtitle2: {
          color: "white",
          fontWeight: 300,
          fontSize: "1.25rem"
        },
        body1: {
          fontSize: "1.25rem",
          color: miaGrey,
          fontWeight: 300
        },
        caption: {
          fontSize: "1rem",
          fontWeight: 300,
          color: miaGrey
        },
        learnButton: {
          borderColor: miaRed,
          borderWidth: 2,
          textTransform: "none",
          color: miaRed,
          borderRadius: 50,
          fontFamily: "Roboto",
          fontWeight: "bold"
        }
      },
      overrides: {
        MuiInputLabel: {
          root: {
            color: miaRed,
            fontSize: "1rem"
          }
        },
        MuiInput: {
          root: {
            color: miaGrey,
            fontWeight: 300
          },
          underline: {
            "&:before": {
              borderBottom: `2px solid ${miaRed}`
            },
            "&:hover:not($disabled):not($focused):not($error):before": {
              borderBottom: `2px solid ${miaRed}`
            }
          }
        }
      }




})
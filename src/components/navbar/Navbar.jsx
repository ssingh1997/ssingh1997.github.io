import "./navbar.scss"
import {Person, Mail, GitHub} from "@material-ui/icons"
import { makeStyles } from '@material-ui/core/styles';

export default function Navbar({ menuOpen, setMenuOpen }) {
    const useStyles = makeStyles(theme => ({
        clickableIcon: {
          cursor: 'default',
          '&:hover': {
          cursor: 'pointer',
          },
        },
      }));
    const classes = useStyles();
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Satyen.</a>
                    <div className="itemContainer">
                        <GitHub onClick={() => window.open("https://github.com/ssingh1997/", "_blank")}
                        className={classes.clickableIcon}/>
                    </div>
                    <div className="itemContainer">
                        <Person classname="icon" />
                        <span>+1 973 830 7654</span>
                    </div>
                    <div className="itemContainer">
                        <Mail classname="icon" />
                        <span>srs833@nyu.edu</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

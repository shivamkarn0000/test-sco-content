import "./topbar.css"
import "./topbar-mobile.css"
import { Person, Mail } from '@material-ui/icons';



export default function Topbar({ hemOpen, setHemOpen }) {

    return (
        <div className={"topbar " + (hemOpen && "active1")} id="topbar" >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className={"logo " + (hemOpen && "active")}>genius.</a>

                    <div className="itemcontaine responsib">
                        <Person className="icon" fontSize="small" />
                        <span  className={"textno " + (hemOpen && "active")}>+977-9868682091</span>
                    </div>
                    <div className="itemcontaine">
                        <Mail className="icon" fontSize="small" />
                        <span className={"textno " + (hemOpen && "active")}>shivamkarn0000@gmail.com</span>
                    </div>
                    <div className="google">
                        <a className={"g-text " + (hemOpen && "googleactive")} href="https://www.Google.com" target="blank"> Google!"</a>
                    </div>

                </div>
                <div className="right">
                    <div className="hembergar hembergar-display" onClick={() => setHemOpen(!hemOpen)}>
                        <span className={"line " + (hemOpen && "line1")}></span>
                        <span className={"line " + (hemOpen && "line2")}></span>
                        <span className={"line " + (hemOpen && "line3")} ></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

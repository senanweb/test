//9 insert photo into file
//10 make style
import Photo from "../logo512.png";

function Header ()
{
    return (
            <div>
                 <ul>
                    <li className="li">Home</li>
                    <li>About-us</li>
                    <li>Lists</li>
                    <li>Contact</li>
                    {/* 9-call import photo and 10-style */}
                    <img src = {Photo} alt= "pic" style={{width:"100px", height:"100px"}}/>
                    {/* anther way to import photo */}
                    <br/>
                    <img src = {require("../logo512.png")} alt= "pic" width="50px" height="50px"/>
                </ul>
            </div>
            );
}
export default Header;
import { useHistory } from "react-router-dom";

const Footer = () => {

    const history = useHistory();

  const routeChange = () =>{ 
    let path = `/search`; 
    history.push(path);

    }
    
    return (
        <div className="open-search">
           <button className="close-search" onClick={routeChange}>GoBack</button>
        </div>
     );
}
 
export default Footer;
import { Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Trams = () => {
    return (
        <div className="m-5">
            <h2>Trams & conditions</h2>
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repellendus dignissimos nesciunt corporis, voluptate magnam sequi mollitia nulla vel. Itaque dolore magnam quod fugiat labore ipsum facilis eum dolores dolorum?</p> 
           <Button variant="danger"><Link to='/register'className="text-decoration-none text-white" ><FaArrowLeft></FaArrowLeft> Go back to registar</Link></Button>
        </div>
    );
};

export default Trams;
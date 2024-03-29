import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftNev = () => {
  const [categoris, setCategoris] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/categoris`)
      .then((res) => res.json())
      .then((data) => setCategoris(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h4>All Caterogy</h4>
      <Button className="py-3 px-4 fw-bold my-3" variant="secondary">
        National News
      </Button>{" "}
      <div className="">
        {categoris.map((category) => (
          <p key={category.id}>
            <Link
              to={`category/${category.id}`}
              className="text-secondary fw-bold text-decoration-none"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNev;

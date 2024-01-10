import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorInside from "../EditorInside/EditorInside";

const News = () => {
  const news = useLoaderData();

  const { image_url, title, details,category_id} = news;
  return (
    <div>
      <Card className="p-2">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
         <Link to={`/category/${category_id}`}><Button variant="danger"><FaArrowLeft></FaArrowLeft> All news in this category</Button></Link>
        </Card.Body>
      </Card>
      <EditorInside></EditorInside>
    </div>
  );
};

export default News;

import moment from "moment";
import { Card, Image } from "react-bootstrap";
import {
  FaRegBookmark,
  FaRegEye,
  FaShareAlt,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NewsCards = ({ news }) => {
  console.log(news);
  // eslint-disable-next-line react/prop-types
  const { _id,author,image_url,title,total_view, details, rating,
  } = news;
  return (
    <div className="mt-5">
      <Card className="">
        <Card.Header className="d-flex  align-items-center">
          <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
          <div className="ps-2 flex-grow-1">
            <p className="mb-0">{author && author?.name}</p>
            <p className="mb-0">
              <small>
                {moment(author?.published_date).format("MMM Do YY")}
              </small>
            </p>
          </div>
          <div>
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...
                <Link
                  to={`/news/${_id}`}
                  className="text-danger text-decoration-none"
                >
                  read more
                </Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex  align-items-center">
          <div className="flex-grow-1">
            {/* <Rating>
              placeholderRating={rating.number}
              emptySymbol={<FaStarHalfAlt></FaStarHalfAlt>}
              readonly
              placeholderSymbol={<FaStar></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            </Rating> */}
            <Rating
              placeholderRating={rating.number}
              emptySymbol={
                <FaStarHalfAlt></FaStarHalfAlt>
              }
              placeholderSymbol={
                <FaStar></FaStar>
              }
              fullSymbol={
                <FaStar></FaStar>
              }
            />
            <span>{rating?.number}</span>
          </div>
          <div>
            <FaRegEye></FaRegEye> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCards;

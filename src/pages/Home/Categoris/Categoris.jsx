import { useLoaderData, useParams } from "react-router-dom";
import NewsCards from "../NewsCard/NewsCards";

const Categoris = () => {
  const { id } = useParams();

  const categorisNews = useLoaderData();
  return (
    <div>
        {id && <h3>thi is categoris : {categorisNews.length}</h3>}
      <div className="">
        {categorisNews.map((news) => (
          <NewsCards key={news._id} news={news}></NewsCards>
        ))}
      </div>
    </div>
  );
};

export default Categoris;

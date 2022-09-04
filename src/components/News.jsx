import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import NewsItem from "./NewItem";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {

  //to capitalize title
  const capitalizeTitle = title => title.charAt(0).toUpperCase() + title.slice(1);
  document.title = `${capitalizeTitle(props.category)} - Little Pony News`

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isPresent, setIsPresent] = useState(true);
  const [totalResults, setTotalResults] = useState(0);


  useEffect(()=>{
    update(page);
  }, [])

  const update = async (page = 1) => {
    //setting the top progress bar animation
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API}&page=${page}&pageSize=${props.pageSize}`;
    
    props.setProgress(35);
    let data = await fetch(url);
    let parsedJSON = await data.json(data);
    setArticles(parsedJSON.articles);
    setLoading(false);
    setTotalResults(parsedJSON.totalResults);
    if (parsedJSON.totalResults === 0 || parsedJSON.status === "error") {
      setIsPresent(false);
    }
    props.setProgress(100);
    return parsedJSON;
  }

  const fetchMoreArticles = async () => {
    let parsedJSON = await update(page + 1);
    setPage(page + 1);
    setArticles([...articles, ...parsedJSON.articles]);
  }


    return (
      <>
        <div className="container flex justify-center align-middle mt-6">
          <h1 className="text-2xl font-sans font-semibold">
            Top {capitalizeTitle(props.category)} Pony Headlines for today
          </h1>
        </div>
        {loading && <div className="flex justify-center mt-5">
          <Spinner />
        </div>
        }
        {!isPresent && <div className="flex justify-center mt-5"><h3 className="text-base font-sans font-semibold text-gray-300">NO NEWS AVAILABLE OR API LIMIT REACHED</h3></div>}
        {isPresent && 
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreArticles}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-3">
            {articles.map((article) => {
              return (
                <NewsItem
                  key={article.url}
                  title={article.title}
                  author={!article.author ? "unknown" : article.author}
                  description={article.description}
                  url={article.url}
                  publishedAt={new Date(article.publishedAt).toGMTString()}
                  source={article.source.name}
                  imageUrl={
                    !article.urlToImage
                      ? "https://sportshub.cbsistatic.com/i/r/2022/08/29/eaa1b387-3de4-4a99-af8e-a50f53647e12/thumbnail/1200x675/d7c95df3e7332b618eddd8f575b88850/mlbpowerrankings0829.png"
                      : article.urlToImage
                  }
                />
              );
            })}
          </div>
        </InfiniteScroll>}
      </>
    );
}

News.defaultProps = {
  country: "us",
  pageSize: 6,
  category: "general"
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News;

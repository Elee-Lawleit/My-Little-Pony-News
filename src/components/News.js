import React, { Component } from "react";
import Spinner from "./Spinner";
import NewsItem from "./NewItem";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class news extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 6,
    category: "general"
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeTitle = title => title.charAt(0).toUpperCase() + title.slice(1);

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      isPresent: true,
      totalResults: 0
    };
    document.title = `${this.capitalizeTitle(this.props.category)} - Little Pony News`
  }
  async componentDidMount() {
    let parsedJSON = await this.update(this.state.page);
    this.setState({
      articles: parsedJSON.articles,
      totalResults: parsedJSON.totalResults,
      loading: false,
    });
  }

  update = async (page) => {
    //setting the top progress bar animation
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API}&page=${page}&pageSize=${this.props.pageSize}`;
    
    this.props.setProgress(35);
    let data = await fetch(url);
    let parsedJSON = await data.json(data);
    if (parsedJSON.totalResults === 0 || parsedJSON.status === "error") {
      this.setState({ isPresent: false })
    }
    this.props.setProgress(100);
    return parsedJSON;
  }

  fetchMoreArticles = async () => {
    let parsedJSON = await this.update(this.state.page + 1);
    this.setState({
      page: this.state.page + 1,
      articles: [...this.state.articles, ...parsedJSON.articles]
    });
  }

  render() {
    return (
      <>
        <div className="container flex justify-center align-middle mt-6">
          <h1 className="text-2xl font-sans font-semibold">
            Top {this.capitalizeTitle(this.props.category)} Pony Headlines for today
          </h1>
        </div>
        {this.state.loading && <div className="flex justify-center mt-5">
          <Spinner />
        </div>
        }
        {!this.state.isPresent && <div className="flex justify-center mt-5"><h3 className="text-base font-sans font-semibold text-gray-300">NO NEWS AVAILABLE OR API LIMIT REACHED</h3></div>}
        {this.state.isPresent && 
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreArticles}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-3">
            {this.state.articles.map((article) => {
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
}

export default news;

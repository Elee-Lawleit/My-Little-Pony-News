import React, { Component } from "react";
import Spinner from "./Spinner";
import NewsItem from "./NewItem";
import PropTypes from 'prop-types'

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
      loading: false,
      page: 1,
      isPresent: true
    };
    document.title = `${this.capitalizeTitle(this.props.category)} - Little Pony News`
  }
  async componentDidMount() {
    let parsedJSON = await this.update(this.state.page);
    this.setState({ articles: parsedJSON.articles, totalResults: parsedJSON.totalResults, loading: false });
  }

  handlePrevPage = async () => {
    let parsedJSON = await this.update(this.state.page - 1);
    this.setState({
      page: this.state.page - 1,
      articles: parsedJSON.articles,
      loading: false,
    });
  };

  handleNextPage = async () => {
    let parsedJSON = await this.update(this.state.page + 1);
    this.setState({
      page: this.state.page + 1,
      articles: parsedJSON.articles,
      loading: false
    });
  };

  update = async (page) => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=026ee9764e1f48b0989406a8126ee4e3&page=${page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })

    let data = await fetch(url);
    let parsedJSON = await data.json(data);
    if(parsedJSON.totalResults == 0 || parsedJSON.status === "error"){
      this.setState({isPresent: false})
    }
    return parsedJSON;
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
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-3">
          {!this.state.loading && this.state.isPresent && this.state.articles.map((article) => {
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
        <div className="container flex justify-between px-10 mb-10">
          <button
            disabled={this.state.page <= 1}
            onClick={this.handlePrevPage}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handleNextPage}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default news;

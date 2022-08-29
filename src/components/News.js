import React, { Component } from "react";
import NewsItem from "./NewItem";

export class news extends Component {
  articles = [
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Indianapolis: Dutch commando dies after shooting outside US hotel",
      description:
        "The special forces soldier was one of three Dutch commandos wounded in an attack early on Saturday.",
      url: "http://www.bbc.co.uk/news/world-us-canada-62712298",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/3328/production/_126469031_dutchdefence.jpg",
      publishedAt: "2022-08-29T08:52:22.833071Z",
      content:
        "By Leo SandsBBC News\r\nA Dutch commando has died of his injuries after being shot outside an Indianapolis hotel while off-duty. \r\nHe was one of three Dutch soldiers, all in the US for training exercis… [+1478 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Ukraine war: UN team leaves for Zaporizhzhia nuclear plant",
      description:
        "The mission is expected to arrive in Zaporizhzhia later in the week, the IAEA director general says.",
      url: "http://www.bbc.co.uk/news/world-europe-62710530",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/1492B/production/_126476248_gettyimages-1240274985.jpg",
      publishedAt: "2022-08-29T05:22:17.4734108Z",
      content:
        "A mission from the UN's nuclear watchdog is on its way to Ukraine's embattled Zaporizhzhia nuclear power plant, the organisation's head said. \r\nRafael Grossi, director general of the International At… [+473 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title:
        "Brazil election: Bolsonaro and Lula trade insults in first debate",
      description:
        "Jair Bolsonaro and Luiz Inácio Lula da Silva clash in a debate ahead of the October presidential vote.",
      url: "http://www.bbc.co.uk/news/world-latin-america-62710526",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/FE8F/production/_126476156_tv078300934.jpg",
      publishedAt: "2022-08-29T04:52:23.2824156Z",
      content:
        "Brazil's right-wing President, Jair Bolsonaro, and leftist leader Luiz Inácio Lula da Silva have taken part in a fiery first television debate ahead of October's general election.\r\nMr Bolsonaro accus… [+1434 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "EU faces 'awful' winters without gas cap - minister",
      description:
        "Calls mount for an EU-wide cap on the price of gas and its decoupling from electricity.",
      url: "http://www.bbc.co.uk/news/world-europe-62710522",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/11721/production/_126475417_c76f76ce8533a570be151eec37244b6367318e73.jpg",
      publishedAt: "2022-08-29T02:37:23.588446Z",
      content:
        'By Alys DaviesBBC News\r\nBelgium\'s energy minister has warned that EU countries will face "five to ten" "terrible" winters if nothing is done to reduce natural gas prices.\r\nCalls are mounting for an E… [+2203 chars]',
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
    };
  }
  render() {
    return (
      <>
        <div className="flex justify-center align-middle mt-6">
          <h1 className="text-2xl font-sans font-semibold">
            Top Pony Headlines for today
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-0">
          {this.state.articles.map((article) => {
            return (
              <NewsItem
                key={article.url}
                title={article.title}
                author={article.author}
                description={article.description}
                imageUrl={article.urlToImage}
                url={article.url}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default news;

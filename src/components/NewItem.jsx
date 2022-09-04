import React from "react";

const NewsItem = (props) => {
    let { title, description, imageUrl, url, author, publishedAt, source } = props;
    return (
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-60 md:h-36 w-full object-cover object-center"
                    src={imageUrl}
                    alt="blog"
                  />
                  <div className="p-6">
                <div className="flex justify-between my-1">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        Author: {author}
                      </h2>
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {publishedAt}
                      </h2>
                    </div>
                <div className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1 my-2">Source: <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{source}</span></div>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {title}
                    </h1>
                    <p className="leading-relaxed mb-3">{description}</p>
                    <div className="flex items-center flex-wrap ">
                      <a
                        className="text-purple-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer"
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }

export default NewsItem;
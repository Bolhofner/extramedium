import React from "react";
import Banner from "../components/Banner";
import ArticlePreview from "../components/ArticlePreview";
import useFetch from "../services/useFetch";


function renderArticlePreview() {
  return (
      <ArticlePreview />
  )
}

function Home() {
  const articlesResponse = useFetch<ArticleResponse>("articles")
  const filterWord = "word"

  const articles = articlesResponse?.articles;

  const filteredArticles = filterWord
    ? articles?.filter((a: { title: string; }) => a.title != filterWord)
    : articles;

  return (
    <>
      <div className="home-page">
        <Banner />

        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <a className="nav-link disabled" href="">
                      Your Feed
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="">
                      Global Feed
                    </a>
                  </li>
                </ul>
              </div>

              <section id="articles">{filteredArticles?.map(renderArticlePreview)}</section>
            </div>

            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>

                <div className="tag-list">
                  <a href="" className="tag-pill tag-default">
                    programming
                  </a>
                  <a href="" className="tag-pill tag-default">
                    javascript
                  </a>
                  <a href="" className="tag-pill tag-default">
                    emberjs
                  </a>
                  <a href="" className="tag-pill tag-default">
                    angularjs
                  </a>
                  <a href="" className="tag-pill tag-default">
                    react
                  </a>
                  <a href="" className="tag-pill tag-default">
                    mean
                  </a>
                  <a href="" className="tag-pill tag-default">
                    node
                  </a>
                  <a href="" className="tag-pill tag-default">
                    rails
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

// type fetchArticles = {
//   data: ArticleResponse,
//   error: string,
//   loading: boolean
// }

type ArticleResponse = {
  articles: Array<Article>
  articlesCount: number
};

type Article = {
  title: string,
  slug: string,
  body: string,
  createdAt: string,
  updatedAt: string,
  tagList: Array<string>,
  description: string,
  author: Author,
  favorited: boolean,
  favoritesCount: number
}

type Author = {
  username: string,
  bio: string,
  image: string,
  following: boolean,
}
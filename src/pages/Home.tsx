import React from "react";
import ArticlePreview from "../components/ArticlePreview";
import Banner from "../components/Banner";
import useFetch from "../services/useFetch";

function renderArticlePreview(a: Article) {
  return <ArticlePreview {...a} />;
}

function renderTags(t: string) {
  return (
    <a href="" className="tag-pill tag-default">
      {t}
    </a>
  );
}

function Home() {
  const articlesResponse = useFetch<ArticleResponse>("articles");
  const tagsResponse = useFetch<TagsResponse>("tags");
  const filterWord = "word";

  const articles = articlesResponse?.articles;

  const filteredArticles = filterWord
    ? articles?.filter((a: { title: string }) => a.title != filterWord)
    : articles;

  const tags = tagsResponse?.tags;
  const tagsToRender = tags?.slice(0, 20);

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

              <section id="articles">
                {filteredArticles?.map(renderArticlePreview)}
              </section>
            </div>

            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>

                <div className="tag-list">{tagsToRender?.map(renderTags)}</div>
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
  articles: Array<Article>;
  articlesCount: number;
};

export type Article = {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: Array<string>;
  description: string;
  author: Author;
  favorited: boolean;
  favoritesCount: number;
};

type Author = {
  username: string;
  bio: string;
  image: string;
  following: boolean;
};

type TagsResponse = {
  tags: Array<string>;
};

import React from "react";
import type { Article } from "../pages/Home";

function truncateString(str: string, num: number) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}

function readableDate(str: string) {
  const date = new Date(str);
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const day = date.getDate();
  return month + " " + day + ", " + year;
}

function ArticlePreview(a: Article) {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href={a.author.username}>
          <img src={a.author.image} />
        </a>
        <div className="info">
          <a href={a.author.username} className="author">
            {a.author.username}
          </a>
          <span className="date">{readableDate(a.updatedAt)}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {a.favoritesCount}
        </button>
      </div>
      <a href="" className="preview-link">
        <h1>{a.title}</h1>
        <p>{a.description}</p>
        <span>{truncateString(a.body, 50)}</span>
      </a>
    </div>
  );
}

export default ArticlePreview;

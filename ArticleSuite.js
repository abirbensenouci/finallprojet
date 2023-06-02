import React from "react";

function ArticleSuite(props) {
  const article = props.article;

  return (
    <div className="article-detail">
      <h1 className="article-title">{article.title}</h1>
      <div className="article-meta">
        <span className="article-date">{article.date}</span>
        <span className="article-author">{article.author}</span>
      </div>
      <div className="article-content">{article.content}</div>
    </div>
  );
}

export default ArticleSuite;


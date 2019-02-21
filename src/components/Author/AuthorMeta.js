import AuthorActions from './authorActions';
import { Link } from 'react-router-dom';
import React from 'react';

const AuthorMeta = props => {
  const author = props.author;
  return (
    <div className="author-meta">
      <Link to={`/@${author.author.username}`}>
        <img src={author.author.image} alt={author.author.username} />
      </Link>

      <div className="info">
        <Link to={`/@${author.author.username}`} className="author">
          {author.author.username}
        </Link>
        <span className="date">
          {new Date(author.createdAt).toDateString()}
        </span>
      </div>

      <AuthorActions canModify={props.canModify} author={author} />
    </div>
  );
};

export default authorMeta;

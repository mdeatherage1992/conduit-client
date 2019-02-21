import React from 'react';
import { Link } from 'react-router-dom';

const AuthorPreview = props => {
  const author = props;
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={`/@${author.name}`}>
          <img src={author.image} alt={author.name} />
        </Link>

        <div className="info">
          <Link className="author" to={`/@${author.name}`}>
            {author.name}
          </Link>
        
        </div>

      <Link to={`/@${author.name}`} className="preview-link">
        <p>{author.bio}</p>
        <p>{author.user_id}</p>
        <span>Read more...</span>
      </Link>
    </div>
    </div>
  );
}

export default AuthorPreview;

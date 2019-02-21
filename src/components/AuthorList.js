import AuthorPreview from './AuthorPreview';
import ListPagination from './ListPagination';
import React from 'react';
import TestRenderer from 'react-test-renderer'; // ES6
const AuthorList = props => {

  

  if (!props.authors) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.authors.articles.length === 0) {
    return (
      <div className="article-preview">
        No authors are here... yet.
      </div>
    );
  }



  return (
    <div>
      {
        props.authors.articles.map(author => {
          return (
            <AuthorPreview name={author.author.username} key={author.userId}  image={author.author.image} bio={author.author.bio}  />
          );
        })
      }


      <ListPagination
        pager={props.pager}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage} />
    </div>
  );
};



export default AuthorList;

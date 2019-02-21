import AuthorMeta from './AuthorMeta';
import CommentContainer from './CommentContainer';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import marked from 'marked';
import { AUTHOR_PAGE_LOADED, AUTHOR_PAGE_UNLOADED } from '../../constants/actionTypes';

const mapStateToProps = state => ({
  ...state.author,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: AUTHOR_PAGE_LOADED, payload }),
  onUnload: () =>
    dispatch({ type: AUTHOR_PAGE_UNLOADED })
});

class Author extends React.Component {
  componentWillMount() {
    this.props.onLoad(Promise.all([
      agent.Authors.get(this.props.match.params.id),
    ]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    if (!this.props.author) {
      return null;
    }

    const markup = { __html: marked(this.props.author.body, { sanitize: true }) };
    const canModify = this.props.currentUser &&
      this.props.currentUser.username === this.props.author.name;
    return (
      <div className="article-page">

        <div className="banner">
          <div className="container">

            <h1>{this.props.author.name}</h1>
            <AuthorMeta
              article={this.props.author}
              canModify={canModify} />

          </div>
        </div>

        <div className="container page">

          <div className="row article-content">
            <div className="col-xs-12">

              <div dangerouslySetInnerHTML={markup}></div>



            </div>
          </div>

          <hr />
          </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Author);

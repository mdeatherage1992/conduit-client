import { Link } from 'react-router-dom';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { DELETE_AUTHOR } from '../../constants/actionTypes';

const mapDispatchToProps = dispatch => ({
  onClickDelete: payload =>
    dispatch({ type: DELETE_AUTHOR, payload })
});

const AuthorActions = props => {
  const author = props.author;
  const del = () => {
    props.onClickDelete(agent.Authors.del(author.id))
  };
  if (props.canModify) {
    return (
      <span>
        <Link
          to={`/editor/${author.id}`}
          className="btn btn-outline-secondary btn-sm">
          <i className="ion-edit"></i> Edit author
        </Link>

        <button className="btn btn-outline-danger btn-sm" onClick={del}>
          <i className="ion-trash-a"></i> Delete author
        </button>

      </span>
    );
  }

  return (
    <span>
    </span>
  );
};

export default connect(() => ({}), mapDispatchToProps)(AuthorActions);

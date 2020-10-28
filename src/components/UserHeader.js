import React from 'react';
import { connect } from 'react-redux';

function UserHeader(props) {

  const { user } = props
  if(!user){
    return null;
  }

  return (
    <div className='header'>
      {user.name}
    </div>
  );
}

function mapStateToProps(state, ownProps) { //onwProps is a reference to the props that are about to be send to the current component
  return {
    user: state.user.find(user => user.id === ownProps.userId)
  }
}

export default connect(mapStateToProps)(UserHeader);
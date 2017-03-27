import React from 'react';

function MainContainer (props) {
  return (
    <div className="jumbotron col-sm-12 text-center transparentBg">
      {props.children}
    </div>
  )
}

export default MainContainer;
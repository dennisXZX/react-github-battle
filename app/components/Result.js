import React, { PropTypes } from 'react';

function dump (obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

const Results = (props) => {
    return (
        <div>
            {dump(props)}
        </div>
    )
}

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playerInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired,
}

export default Results;
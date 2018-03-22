import React from 'react';

const Topic = ({ match }) => {
    return (
        <div>
            <h3>{match.params.topicId}</h3>
            <h4>{match.path}</h4>
            <h5>{match.isExact}</h5>
            <h5>{match.url}</h5>
        </div>
    );
};

export default Topic;
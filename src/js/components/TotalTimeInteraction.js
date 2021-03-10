import React from 'react';

function TotalTimeInteractionComponent(props) {
    const times = props.records.map(({time}) => time);
    const minTime = Math.min(...times);
    const maxTime = Math.max(...times);
    const totalMillisecondsDiff = maxTime - minTime;
    const secondsDiff = totalMillisecondsDiff % (60 * 1000);
    const minutesDiff = (totalMillisecondsDiff - secondsDiff)/60000;

    
    return <fieldset>
        <legend>Total Time Interaction</legend>
        {minutesDiff} min, {secondsDiff/1000} secs
    </fieldset>;
}

export const TotalTimeInteraction = React.memo(TotalTimeInteractionComponent);

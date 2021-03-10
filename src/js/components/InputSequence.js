import React from 'react';

function InputSequenceComponent(props) {
    const inputSequences = [];
    const eventNames = props.records
        .map(({event}) => event.type)
        .filter(eventName => eventName !== 'focus');
    
    eventNames.forEach((eventName, i) => {
        if (eventName !== 'input') {
            return;
        }

        if (i === 0 || eventNames[i-1]!=='input') {
            inputSequences.push(1);
            return;
        }
        inputSequences[inputSequences.length - 1]++;
    });
    return <fieldset>
        <legend>Input sequence</legend>
        Length of the longest sequence of following input events:
        <br />
        {Math.max(...inputSequences)}
    </fieldset>;
}

export const InputSequence = React.memo(InputSequenceComponent);

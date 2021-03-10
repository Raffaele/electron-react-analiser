import React from 'react';

function LineVisualiserComponent({
    record,
    onDelete,
    onMoveSelection,
    isMoving,
    isPrevMoving,
    isNextMoving,
    onMoveCancel,
    moveHere
}) {
    function getFormattedDateTime() {
        const date = new Date(record.time);
        return [
            date.toDateString(),
            date.toLocaleTimeString()
        ].join(' ');
    }
    return <div style={{backgroundColor: isMoving ? 'gray':'white'}}>
        <p>
            -- {isNextMoving && <button onClick={moveHere}>Move here</button>}
        </p>
        Event: {record.event.type}
        <br />
        {record.setup.nodeName && <>
            Node: {record.setup.nodeName}
        </>}
        {record.setup.url && <>
            Url: {record.setup.url}
        </>}
        <br />
        {getFormattedDateTime()}
        {isMoving && <div>
            <button onClick={onMoveCancel}>Cancel movement</button>
        </div>}
        <p>
            -- {isMoving || isPrevMoving || isNextMoving || <>
                <button onClick={onDelete}>Delete</button>
                <button onClick={onMoveSelection}>Move</button>
            </>}
        </p>
        <p>
            -- {isPrevMoving && <button onClick={moveHere}>Move here</button>}
        </p>
        <hr/>
    </div>;
}

export const LineVisualiser = React.memo(LineVisualiserComponent);
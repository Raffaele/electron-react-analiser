import React from 'react';

function EventTypesComponent(props) {
    const { records } = props;
    const eventTypes = getEventTypes(records);
    function getEventTypes(array) {
        const result = {};

        array.forEach(record => {
            const eventType = record.event.type;
            if (!result[eventType]) {
                result[eventType] = 0;
            }
            result[eventType]++;
        });
        return Object.entries(result).map(([eventName, occurrency]) => ({ eventName, occurrency }));
    }
    return <fieldset>
        <legend>Event counter:</legend>
        <table>
            <tbody>
                {eventTypes.map(eventLine => <tr key={eventLine.eventName}>
                    <th style={{ paddingRight: '20px', textAlign: 'left' }}>
                        {eventLine.eventName}
                    </th>
                    <td>
                        {eventLine.occurrency}
                    </td>
                </tr>)}
            </tbody>
        </table>

    </fieldset>;
}

export const EventTypes = React.memo(EventTypesComponent);
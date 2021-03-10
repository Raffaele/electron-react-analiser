import React from 'react';

function DelayStatisticsComponent(props) {
    const {records} = props;
    const delays = [];
    records.forEach((record, index) => {
        if (!index) return;
        const oldRecord = records[index - 1];
        delays.push(record.time-oldRecord.time);
    });
    const maxDelay = Math.max(...delays);
    const minDelay = Math.min(...delays);
    const averageDelay = delays.reduce((sum, delay) => sum+delay)/delays.length;
    const thStyle = {
        textAlign: 'left'
    };
    return <fieldset>
        <legend>Delays (milliseconds):</legend>
        <table>
            <tbody>
                <tr>
                    <th style={thStyle}>Min delay</th>
                    <td>{minDelay}</td>
                </tr>
                <tr>
                    <th style={thStyle}>Max delay</th>
                    <td>{maxDelay}</td>
                </tr>
                <tr>
                    <th style={thStyle}>Average delay</th>
                    <td>{averageDelay.toFixed(3)}</td>
                </tr>
            </tbody>
        </table>
    </fieldset>
}

export const DelayStatistics = React.memo(DelayStatisticsComponent);

import React, { useContext } from 'react';
import { MainContext } from './components/DataManager';
import { Visualiser } from './components/Visualiser';
import { Statistics } from './components/Statistics';

console.log(electron.notificationApi.sendNotification);

export default function App() {
    const context = useContext(MainContext);
    const { isStatisticVisible } = context.visibilityManager;
    function downloadJson() {
        const { records } = context.recordManager;
        console.log('I should implement the download here');
        electron.notificationApi.sendNotification({
            type: 'DOWNLOAD-RECORDS',
            records
        });
    }
    return (
        <>
            <h1>Web site records analyser!!!</h1>
            <p>
                <button onClick={downloadJson}>Download the file</button>
            </p>
            {isStatisticVisible ? <Statistics /> : <Visualiser />}
        </>
    )
}

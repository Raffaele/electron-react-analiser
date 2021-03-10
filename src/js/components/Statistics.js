import React, { useContext } from 'react';
import { MainContext } from './DataManager';
import { EventTypes } from './EventTypes';
import { DelayStatistics } from './DelayStatistics';
import { InputSequence } from './InputSequence';
import { TotalTimeInteraction } from './TotalTimeInteraction';

export function Statistics() {
    const { visibilityManager, recordManager } = useContext(MainContext);
    const { hide } = visibilityManager;

    return <div>
        statistics
        <button onClick={hide}>hide statistics</button>
        <EventTypes records={recordManager.records} />
        <DelayStatistics records={recordManager.records} />
        <InputSequence records={recordManager.records} />
        <TotalTimeInteraction records={recordManager.records} />
    </div>;
};

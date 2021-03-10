import React, { createContext } from 'react';

import * as originalData from '../../task.recording.json';
const originalRecords = originalData.default.records;

import { useStatisticVisibility } from '../hooks/useStatisticVisibility';
import { useRecords } from '../hooks/useRecords';

export const MainContext = createContext();

export function DataManager({children}) {
    const recordManager = useRecords(originalRecords);
    const visibilityManager = useStatisticVisibility(false);
    const data = {
        recordManager,
        visibilityManager
    }
    return <MainContext.Provider value={data}>
        {children}
    </MainContext.Provider>;
};
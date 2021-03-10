import { useState } from 'react';

export function useRecords(defaultRecords = []) {
    const [records, setRecords] = useState(defaultRecords);
    const [movingIndex, setMovingIndex] = useState(-1);
    function reset() {
        setRecords(defaultRecords);
    }

    function remove(recordIndex) {
        const newRercords = records.filter((_, i) => i !== recordIndex);
        setRecords(newRercords);
    }

    function relocate(oldIndex, newIndex) {
        const recordToMove = records[oldIndex];
        const newRecordList = records.filter((_, i) => i!==oldIndex);
        newRecordList.splice(newIndex, 0, recordToMove);
        setRecords(newRecordList);
        resetMovingIndex();
    }

    function resetMovingIndex() {
        setMovingIndex(-1);
    }
    return {
        setRecords,
        relocate,
        records,
        remove,
        reset,
        movingIndex,
        setMovingIndex,
        resetMovingIndex
    };
}
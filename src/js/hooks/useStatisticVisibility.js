import { useState } from 'react';

export function useStatisticVisibility(isVisibleByDefault = false) {
    const [isStatisticVisible, setVisibilityStatistics] = useState(isVisibleByDefault);
    function show() {
        setVisibilityStatistics(true);
    }
    function hide() {
        setVisibilityStatistics(false);
    }
    return {
        isStatisticVisible,
        show,
        hide
    };
}
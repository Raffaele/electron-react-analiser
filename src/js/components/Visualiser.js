import React, { useContext } from 'react';
import { MainContext } from './DataManager';
import { LineVisualiser } from './LineVisualiser';

export function Visualiser() {
    const { recordManager, visibilityManager } = useContext(MainContext);
    const {show} = visibilityManager;
    const {records, remove, reset, movingIndex, setMovingIndex, relocate} = recordManager;

    return <div>
      <h2>Table</h2>
      <button onClick={show}>show statistics</button>
      <button onClick={reset}>reset</button>
      <ol>
            {records.map((record, i) => <li key={i}>
                <LineVisualiser
                    record={record}
                    onMoveSelection={() => setMovingIndex(i)}
                    onDelete={() => remove(i)}
                    isMoving={i === movingIndex}
                    isPrevMoving={movingIndex>-1 && movingIndex<i}
                    isNextMoving={movingIndex>i}
                    onMoveCancel={() => setMovingIndex(-1)}
                    moveHere={() => relocate(movingIndex, i)}
                />
              </li>
            )}
      </ol>
    </div>;
}
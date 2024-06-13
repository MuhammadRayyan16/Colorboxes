import { useState } from 'react';
import { Stage, Layer, Rect, Text, } from 'react-konva';
import Konva from 'konva';

function App() {

  return (
    <div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
            return (
              <Rect
                x={Math.round(Math.random() * 1000)}
                y={Math.round(Math.random() * 500)}
                width={200}
                height={200}
                shadowBlur={2}
                fill={Konva.Util.getRandomColor()}
              />
            )
          })}
        </Layer>
      </Stage>
    </div>

  );
}
s
export default App;
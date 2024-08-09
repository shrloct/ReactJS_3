import React, { useEffect } from 'react';

const MyComponent = () => {
useEffect(() => {
// Menandai waktu sebelum render
performance.mark('start-render');

    // Menandai waktu setelah render selesai
    return () => {
      performance.mark('end-render');
      performance.measure('Render Time', 'start-render', 'end-render');

      const measure = performance.getEntriesByName('Render Time')[0];
      console.log(`Render time: ${measure.duration}ms`);

      // Membersihkan marks setelah digunakan
      performance.clearMarks('start-render');
      performance.clearMarks('end-render');
      performance.clearMeasures('Render Time');
    };

}, []);

return (
<div>
<h1>Hello, World!</h1>
<p>This is a component to measure render time.</p>
</div>
);
};

export default MyComponent;

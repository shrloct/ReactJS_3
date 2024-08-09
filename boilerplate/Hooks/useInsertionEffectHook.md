import React, { useInsertionEffect, useRef } from 'react';

const DynamicStyleComponent = () => {
const divRef = useRef(null);

useInsertionEffect(() => {
const div = divRef.current;

    if (div) {
      // Menambahkan gaya secara dinamis sebelum layout dan paint
      const style = document.createElement('style');
      style.textContent = `
        .dynamic-style {
          background-color: lightblue;
          color: darkblue;
        }
      `;
      document.head.appendChild(style);

      // Menambahkan class ke elemen
      div.classList.add('dynamic-style');

      return () => {
        // Membersihkan gaya ketika komponen di-unmount
        document.head.removeChild(style);
      };
    }

}, []);

return (
<div ref={divRef}>
<p>This div will have dynamic styling applied before layout.</p>
</div>
);
};

export default DynamicStyleComponent;

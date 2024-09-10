
import React from 'react';

function Chip({ onclick, isChosen, showCategory }) {
    return (
        <div
            onClick={onclick}
            className={`cursor-pointer px-4 py-2 rounded-full ${isChosen ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
        >
            {showCategory.name}
        </div>
    );
}

export default Chip;


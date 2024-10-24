import React from 'react';

const MonthButton = ({ month, index, isActive, changeMonth }) => {
    return (
        <button
            className={`month-button ${isActive ? 'active' : ''}`}
            onClick={() => changeMonth(index)}
        >
            {month}
        </button>
    );
};

export default MonthButton;

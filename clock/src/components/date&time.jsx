// function Setdate(){
//     let date = new Date();
//     return(
//         <h1 className="lead">Today's date & time: {date.toLocaleDateString()} <span className="fw-bold">{date.toLocaleTimeString()}</span></h1>
//     );
// };
// export default Setdate;

import React, { useState, useEffect } from 'react';

function Setdate() {
    // Initialize the dateState using useState
    const [dateState, setDateState] = useState(new Date());

    // Update the dateState every second using useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateState(new Date());
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="App">
            <h1 className="lead">
                Today's date & time:
                <span className="fw-bold">
                    {dateState.toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                    })}
                    {' '}
                    {dateState.toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        hour12: true,
                    })}
                </span>
            </h1>
        </div>
    );
}

export default Setdate;

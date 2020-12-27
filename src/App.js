import { useEffect, useState } from 'react';
import './App.css';

// use context?
// https://stackoverflow.com/questions/34351804/how-to-declare-a-global-variable-in-react
let currentTime = new Date();
let timerDuration = 25;
// global variables? bruh
// need to find a way to pass current time and how long the study session will be
function App() {

    const calculateTimeLeft = (timerDuration) => {
        let difference = +new Date(currentTime.getTime() + timerDuration * 60000) - +new Date();
        // let difference = +new Date("12/27/2020, 22:45:00") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(timerDuration));
    // const [year] = useState(new Date().getFullYear());

    useEffect( () => {
    const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft(timerDuration));
    }, 1000);
    //clear timeout if the component is unmounted
    return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    return (
        <div id="timer">
            {timerComponents.length ? timerComponents : <span>Study session is done! Get some rest :)</span>}
        </div>
    );
}


export default App;

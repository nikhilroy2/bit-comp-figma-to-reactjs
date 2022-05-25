import React, {useState} from 'react'
import Countdown from "react-countdown";
// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return (
            <div className="counter d-flex mt-2 text-center">
                <div className="counter_item">
                    <span className="time">{days}</span>
                    <br />
                    Days
                </div>
                <div className="counter_item">
                    <span className="time">{hours}</span>
                    <br />
                    Hours
                </div>
                <div className="counter_item">
                    <span className="time">{minutes}</span>
                    <br />
                    Minutes
                </div>
                <div className="counter_item">
                    <span className="time">{seconds}</span>
                    <br />
                    Seconds
                </div>
            </div>
        );
    }
};

export const CountDownStart = () => {

    // first try useMemo but it's not working then try useEffect then it's worked.
    const CountdownWrapper = () => <Countdown date={Date.now() + 1036800000} renderer={renderer} />
    const MemoCountDown = React.memo(CountdownWrapper)
    //console.log(MemoCountDown)
    const [countReady, setCountReady] = useState('')
    React.useEffect(() => {
        setCountReady(<MemoCountDown></MemoCountDown>)
    }, [])
    return (
        <>{countReady}</>
    )
}
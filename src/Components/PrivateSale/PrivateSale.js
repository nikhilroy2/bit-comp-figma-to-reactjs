import React from "react";
import "./PrivateSale.css";
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
      <div className="counter justify-content-center  d-flex mt-2 text-center align-items-center">
        <div className="counter_item mx-4">
          <span className="time">{days}</span>
          <br />
          <span className="time_name">Days</span>
        </div>{" "}
        :
        <div className="counter_item mx-4">
          <span className="time">{hours}</span>
          <br />

          <span className="time_name">Hours</span>
        </div>{" "}
        :
        <div className="counter_item mx-4">
          <span className="time">{minutes}</span>
          <br />
          <span className="time_name">Minutes</span>
        </div>{" "}
        :
        <div className="counter_item mx-4">
          <span className="time">{seconds}</span>
          <br />
          <span className="time_name">Seconds</span>
        </div>
      </div>
    );
  }
};

function PrivateSale(props) {
  return (
    <div id="PrivateSale">
      <h2>
        Private <br /> Sale
      </h2>
      <div className="private_sale_counter text-center">
        <Countdown date={Date.now() + 1036800000} renderer={renderer} />
      </div>
      <div className="counter_input_wrapper w-75 mx-auto">
        <input type="text"  defaultValue={1300} />
        <button>MAX</button>
      </div>

      <div className="helper">
        <small className="d-block p-2">1 BUSD = 500 $ROYALE</small>
        <button className="btn_frame">Buy with BUSD</button>
      </div>
    </div>
  );
}

export default PrivateSale;

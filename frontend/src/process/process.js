//file that to be displayed on the right side of the chat room.
//It displays the secret key used, encrypted and decrypted message.

import { useSelector } from "react-redux";
import "./process.scss";
function Process() {
  //// returns new state from the reducers
  const state = useSelector((state) => state.ProcessReducer);

  return (
    <div className="process">
      <h5>
        {/* just for the easy demonstration, I put secret key here, othervise put it in .env file   */}
        Secret Key : <span>"uI2ooxtwHeI6q69PS98fx9SWVGbpQohO"</span>
      </h5>
      <div className="incoming">
        <h4>Incoming Data</h4>
        <p>{state.cypher}</p>
      </div>
      <div className="crypt">
        <h4>Decypted Data</h4>
        <p>{state.text}</p>
      </div>
    </div>
  );
}
export default Process;

//The code above is an optional component where I display an incoming encrypted message
//and decrypt it using our secret key.
//The file process.js displays the incoming encrypted and decrypted messages on the sidebar.

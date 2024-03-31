import { useState } from "react";
import "./App.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="main-div">
        <input
          autoFocus
          placeholder="password..."
          type={show ? "text" : "password"}
        />
        <div className="icon">
          {show ? (
            <AiFillEye onClick={handleShow} />
          ) : (
            <AiFillEyeInvisible onClick={handleShow} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;

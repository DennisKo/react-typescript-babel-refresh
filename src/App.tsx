import * as React from "react";
import Message from "./Message";

function App() {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <button onClick={() => setShow((state) => !state)}>Click me?</button>
      <Message show={show} message="Peekaboo!" />
    </>
  );
}

export default App;

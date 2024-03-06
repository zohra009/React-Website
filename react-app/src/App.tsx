//import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // const handleSelectItem = (items: string) => {
  //   console.log(items);

  //jsx
  /* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */

  //use state hooonCloseClickclare state variable, initialize to false which is hidden and returns an array, and separate itinto two variables alretVisible and setalertVisible
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert!</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Alert Button
      </Button>
    </div>
  );
}

export default App;

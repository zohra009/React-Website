import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (items: string) => {
    console.log(items);
  };
  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      <Alert>
        Hello <span>World!</span>
      </Alert>
    </div>
  );
}

export default App;

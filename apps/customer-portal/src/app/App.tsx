import { Button } from "@repo/ui";
import { formatCurrency } from "@repo/utils";

function App() {
  return (
    <>
      <h1>Complete lifecycle of the frontend </h1>
      <Button
        onClick={() => {
          alert(formatCurrency(12345));
        }}
      />
      <p>This is data from new branch !!</p>
      <p>New branch added hello!</p>
    </>
  );
}

export default App;

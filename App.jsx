import React from "react";
import { Button } from "primereact/button";
function App() {
  return (
    <div>
      <Button
        label={"click"}
        icon="pi pi-check"
        iconPos="right"
        className="p-button-secondary"
      />
    </div>
  );
}

export default App;

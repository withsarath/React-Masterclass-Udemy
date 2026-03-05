import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic]= useState("Please Click One of the Button Above..")
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
    console.log(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=>handleSelect("Components")}>Components</TabButton>
            <TabButton onSelect={()=>handleSelect("Jsx")}>Jsx</TabButton>
            <TabButton onSelect={()=>handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={()=>handleSelect("State")}>State</TabButton>
          </menu>
         {selectedTopic}
        </section>
      </main>
    </div>
  );
}
export default App;

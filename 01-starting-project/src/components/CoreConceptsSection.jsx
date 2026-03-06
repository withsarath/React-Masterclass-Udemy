import { CORE_CONCEPTS } from "../data";
import CoreConcepts from "./CoreConcepts";

export default function CoreConceptsSection() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem, index) => (
          <CoreConcepts key={index} {...conceptItem} />
        ))}
      </ul>
    </section> 
  );
}

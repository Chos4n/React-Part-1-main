import CoreConcept from "./assets/components/CoreConcepts";
import { data } from "./data";

function App() {
  return (
    <div>
      <header>
        <img src="src/assets/img/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcept 
              image={data[0].image} 
              title={data[0].title} 
              description={data[0].description} 
            />

            <CoreConcept 
              image={data[1].image} 
              title={data[1].title} 
              description={data[1].description} 
            />

            <CoreConcept 
              image={data[2].image} 
              title={data[2].title} 
              description={data[2].description} 
            />

            <CoreConcept 
              image={data[3].image} 
              title={data[3].title} 
              description={data[3].description} 
            />
            
          </ul>
        </section>

      </main>
    </div>
  );
}

export default App;

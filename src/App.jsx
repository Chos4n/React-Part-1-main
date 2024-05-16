import CoreConcept from "./assets/components/CoreConcepts";
import { data } from "./data";

import Header from "./assets/components/Header";
import { header } from "./data";

function App() {
  return (
    <div>
      <header>
        <Header 
          image={header[0].image} 
          title={header[0].title} 
          description={header[0].description} 
        />
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

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
            {data.map((concept, index) =>(

              <CoreConcept 
                key={index}
                image={concept.image}
                title={concept.title}
                description={concept.description}
              />

            ))}
            
          </ul>
        </section>

      </main>
    </div>
  );
}

export default App;

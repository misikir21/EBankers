import React from "react";
import styles from "./style";
import {
  Cta,
  Clients,
  Testimonials,
  Footer,
  Stats,
  CardDeal,
  Business,
  Billing,
  Hero,
  Navbar,
} from "./Components";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}></div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <Cta />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

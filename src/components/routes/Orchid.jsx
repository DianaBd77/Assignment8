import "../../App.css";
import RoutePage from "./RoutePage";
import orchid from "../home/pic/orchid.jpg";
import React from "react";

const Orchid = () => {
  return (
    <div>
      <RoutePage
        title={"ORCHID"}
        description={
          "Orchidaceae, commonly called the orchid family, is a diverse and widespread family of flowering plants, with blooms that are often colourful and fragrant. Along with the Asteraceae, they are one of the two largest families of flowering plants. The Orchidaceae have about 28,000 currently accepted species, distributed in about 763 genera. The determination of which family is larger is still under debate, because verified data on the members of such enormous families are continually in flux. Regardless, the number of orchid species is nearly equal to the number of bony fishes, more than twice the number of bird species, and about four times the number of mammal species. The family encompasses about 6–11% of all seed plants. The largest genera are Bulbophyllum (2,000 species), Epidendrum (1,500 species), Dendrobium (1,400 species) and Pleurothallis (1,000 species). It also includes Vanilla (the genus of the vanilla plant), the type genus Orchis, and many commonly cultivated plants such as Phalaenopsis and Cattleya. Moreover, since the introduction of tropical species into cultivation in the 19th century, horticulturists have produced more than 100,000 hybrids and cultivars."
        }
        img={orchid}
        alt={"orchid"}
      />
    </div>
  );
};

export default Orchid;

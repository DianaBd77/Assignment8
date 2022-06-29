import "../../App.css";
import RoutePage from "./RoutePage";
import sunflower from "../home/pic/sunflower.jpg";
import React from "react";

const Sunflower = () => {
  return (
    <div>
      <RoutePage
        title={"SUNFLOWER"}
        description={
          "Helianthus is a genus comprising about 70 species of annual and perennial flowering plants in the daisy family Asteraceae commonly known as sunflowers. Except for three South American species, the species of Helianthus are native to North America and Central America. The best-known species is the common sunflower (Helianthus annuus), whose round flower heads in combination with the ligules look like the Sun. This and other species, notably Jerusalem artichoke (H. tuberosus), are cultivated in temperate regions and some tropical regions as food crops for humans, cattle, and poultry, and as ornamental plants. The species H. annuus typically grows during the summer and into early fall, with the peak growth season being mid-summer. Several perennial Helianthus species are grown in gardens, but have a tendency to spread rapidly and can become aggressive. On the other hand, the whorled sunflower, Helianthus verticillatus, was listed as an endangered species in 2014 when the U.S. Fish and Wildlife Service issued a final rule protecting it under the Endangered Species Act. The primary threats are industrial forestry and pine plantations in Alabama, Georgia, and Tennessee. They grow to 1.8 metres (6 feet) and are primarily found in woodlands, adjacent to creeks and moist, prairie-like areas."
        }
        img={sunflower}
        alt={"sunflower"}
      />
    </div>
  );
};

export default Sunflower;

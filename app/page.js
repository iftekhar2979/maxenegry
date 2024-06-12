
import Card from "@/component/Card";
import Image from "next/image";

const elements=[
  {firstElement:"asaljsd sdjfosj hfso" ,
    secondElement:"ncvigf vibfa saiufgs",
    thirdElement :"snvoiashf sdfhsoidfh ",
    iconLink:"https://www.maxenergy.at/dist/assets/at/website/icon-biene.svg",
    mainHeadingElement:"Max Ocean",
    buttonElement:"Zum Trip",
    backgroundImage:"https://www.maxenergy.at/dist/assets/at/website/Gradient_1_pastell.webp",
    paddingTop:"4rem"
  },
  {firstElement:"asaljsd sdjfosj hfso" ,
    secondElement:"ncvigf vibfa saiufgs",
    thirdElement :"snvoiashf sdfhsoidfh ",
    iconLink:"https://www.maxenergy.at/dist/assets/at/website/forest-1.svg",
    mainHeadingElement:"Max Ocean + Drive",
    buttonElement:"Zum Trip",
    backgroundImage:"https://www.maxenergy.at/dist/assets/at/website/Gradient_1_warm.webp",
     paddingTop:"0rem"
  },
  {firstElement:"asaljsd sdjfosj hfso" ,
    secondElement:"ncvigf vibfa saiufgs",
    thirdElement :"snvoiashf sdfhsoidfh ",
    iconLink:"https://www.maxenergy.at/dist/assets/at/website/wave.svg",
    mainHeadingElement:"Max Home + Drive",
    buttonElement:"Zum Trip",
    backgroundImage:"https://www.maxenergy.at/dist/assets/at/website/Gradient_3_pastell.webp",
    paddingTop:"6rem"  
  },
  {firstElement:"asaljsd sdjfosj hfso" ,
    secondElement:"ncvigf vibfa saiufgs",
    thirdElement :"snvoiashf sdfhsoidfh ",
    iconLink:"https://www.maxenergy.at/dist/assets/at/website/emobility-icon.svg",
    mainHeadingElement:"Max Kalima + Drive",
    buttonElement:"Zum Trip",
    backgroundImage:"https://www.maxenergy.at/dist/assets/at/website/Gradient_3_warm.webp",
    paddingTop:"0rem"  
  }
]
export default function Home() {
  return (
    <main className="mainGrid">
    {
      elements?.map(item=><Card object={item}/>)
    }
    </main>
  );
}

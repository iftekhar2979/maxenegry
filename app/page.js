
import Card from "@/component/Card";
import Image from "next/image";

const elements=[
  {firstElement:"Dein Beitrag für mehr Biodiversität" ,
    secondElement:"Landwirte in Österreich unterstützen",
    thirdElement :"100% Ökoenergie ",
    iconLink:"https://www.maxenergy.at/dist/assets/at/website/icon-biene.svg",
    mainHeadingElement:"Max Heimat",
    buttonElement:"Zum Trip",
    backgroundImage:"https://www.maxenergy.at/dist/assets/at/website/Gradient_1_pastell.webp",
    paddingTop:"4rem",
    dataType:"first"
  },
  {firstElement:"Monatlich einen Baum pflanzen" ,
    secondElement:"MAXimaler Klimaschutz",
    thirdElement :"100% Ökoenergie",
    iconLink:"https://www.maxenergy.at/dist/assets/at/website/forest-1.svg",
    mainHeadingElement:"Max Klima",
    buttonElement:"Zum Trip",
    backgroundImage:"https://www.maxenergy.at/dist/assets/at/website/Gradient_1_warm.webp",
     paddingTop:"0rem",
     dataType:"second"
  },
  {firstElement:"1kg Plastikmüll pro Monat" ,
    secondElement:"Reinigung von Gewässern unterstützen",
    thirdElement :"100% Ökoenergie",
    iconLink:"https://www.maxenergy.at/dist/assets/at/website/wave.svg",
    mainHeadingElement:"Max Ocean",
    buttonElement:"Zum Trip",
    backgroundImage:"https://www.maxenergy.at/dist/assets/at/website/Gradient_3_pastell.webp",
    paddingTop:"6rem"  ,
    dataType:"third"
  },
  {firstElement:"E-Mobilität - einfach und günstig" ,
    secondElement:"Für Zuhause und unterwegs",
    thirdElement :"100% Ökoenergie",
    iconLink:"https://www.maxenergy.at/dist/assets/at/website/emobility-icon.svg",
    mainHeadingElement:"Max Home + Drive",
    buttonElement:"Zum Trip",
    backgroundImage:"https://www.maxenergy.at/dist/assets/at/website/Gradient_3_warm.webp",
    paddingTop:"0rem"  ,
    dataType:"fourth"
  }
]
export default function Home() {
  return (
    <main className="mainGrid">
    {
      elements?.map((item,index)=><Card key={index} object={item}/>)
    }
    </main>
  );
}

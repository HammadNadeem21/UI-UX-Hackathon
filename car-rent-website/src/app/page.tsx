import Ads from "@/components/Ads";
import PickUp from "@/components/PickUp";
import Popular from "@/components/Popular";
import Recomend from "@/components/Recomend";


export default function Home() {
  return (
   <div>
    
   
{/* Ads */}
<Ads/>

{/* Pick Up */}
<PickUp/>

{/* Popular Cars */}
   <Popular/>

   {/* Recomended Cars */}
   <Recomend/>
   </div>
  );
}

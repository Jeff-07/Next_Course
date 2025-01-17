import qs from "qs";

import { getHomePageData } from "@/data/loader";
import { getGlobalData } from "@/data/loader";

import { HeroSection } from "@/components/custom/hero-section";
import { FeatureSection } from "@/components/custom/features-section";
import { TableSection } from "@/components/custom/table-trial";

import { getStrapiURL } from "@/lib/utils";

const blockComponents = {
  "layout.hero-section": HeroSection,
  "layout.features-section": FeatureSection,
  "layout.table-section": TableSection,
};

function blockRenderer(block:any) {
  const Component = blockComponents[block.__component as keyof typeof blockComponents];
  return Component ? <Component key={block.id} data={block}/> : null;
}

export default async function Home() {
  const strapiData = await getHomePageData();

  const {blocks} = strapiData?.data || [];

  console.log("Blocks:");
  console.dir(blocks, {depth:null});
  

  return (
    <main>            
        {blocks.map(blockRenderer)}
    </main>
  );
}

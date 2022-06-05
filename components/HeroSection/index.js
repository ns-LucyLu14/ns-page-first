import React from "react";

import Video from "../../videos/Video3.mp4";
import NsLogoLarge from "../../images/NS-logo (1).svg";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroTitle,
  HeroSub,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroTitle>
            <img src={NsLogoLarge} alt="No Stress logo large" />
          </HeroTitle>
          <HeroSub>Let your creativity take you...</HeroSub>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;

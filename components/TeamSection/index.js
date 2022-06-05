import React from "react";

import Image from "../../images/NS-logo-small.svg";
import {
  TeamContainer,
  TeamWrapper,
  TeamH1,
  TeamCard,
  TeamImg,
  TeamH2,
  TeamP,
} from "./TeamSectionElements";

const TeamSection = () => {
  return (
    <>
      <TeamContainer>
        <TeamH1>Our Team</TeamH1>
        <TeamWrapper>
          <TeamCard>
            <TeamImg src={Image} alt="image"></TeamImg>
            <TeamH2>Domagoj Lučić</TeamH2>
            <TeamP>
              The best bboy in the world! Far better than Lux or Miro!
            </TeamP>
          </TeamCard>
          <TeamCard>
            <TeamImg src={Image} alt="image"></TeamImg>
            <TeamH2>Domagoj Lučić</TeamH2>
            <TeamP>
              The best bboy in the world! Far better than Lux or Miro!
            </TeamP>
          </TeamCard>
          <TeamCard>
            <TeamImg src={Image} alt="image"></TeamImg>
            <TeamH2>Domagoj Lučić</TeamH2>
            <TeamP>
              The best bboy in the world! Far better than Lux or Miro!
            </TeamP>
          </TeamCard>
        </TeamWrapper>
      </TeamContainer>
    </>
  );
};

export default TeamSection;

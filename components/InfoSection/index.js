import React from "react";

import Button from "@mui/material/Button";
// import NsVideo from "../../videos/Turn-it-up-bitch-1.mov";
// import NsVideo2 from "../../videos/Lux de Lux_solo.mp4";
import NsLogoLarge from "../../images/NS-logo (1).svg";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrapper,
  ImgWrapper,
  Img,
  Video,
} from "./InfoSectionElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrapper>
                  <Button
                    variant="outlined"
                    size="medium"
                    sx={{
                      color: "lightblue",
                      borderColor: "lightblue",
                    }}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Img src={NsLogoLarge} alt={alt} />
                {/* <Video src={NsVideo2} controls muted type="video/mp4" /> */}
              </ImgWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;

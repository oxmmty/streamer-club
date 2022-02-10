import React from "react";
// import component
import { Row, Col } from "components/Layout";
import { Image } from "components/Image";
import { Text } from "components/Text";
//  import types
import { ClipProps } from "types/components/ClipCard";
//  import styled component
import {
  ClipCardWrapper,
  ClipContent,
  ClipFooter,
  PlayWrapper,
} from "./ClipCard.style";
//  import asssets
import Play from "assets/images/home/play.png";
import DefaultPlayerImage from "assets/images/player/default-player-image.png";
const ClipCard: React.FC<ClipProps> = ({
  id,
  backgroundImage,
  content,
  title,
  mode = "clip",
  handleClick,
}) => {
  const onHandleClick = (id: number) => {
    handleClick && handleClick(id);
  };

  return (
    <ClipCardWrapper mode={mode} onClick={() => onHandleClick(id)}>
      <ClipContent mode={mode}>
        <Image
          src={backgroundImage || DefaultPlayerImage}
          oFit="cover"
          mode={mode === "teams" ? "fill" : "intrinsic"}
          width={["photos", "videos", "player"].includes(mode) ? 142 : 0}
          height={["photos", "videos", "player"].includes(mode) ? 142 : 0}
        />
        {(mode === "clip" || mode === "videos") && (
          <PlayWrapper mode={mode}>
            <Image src={Play} width={69} height={69} />
          </PlayWrapper>
        )}
      </ClipContent>

      {mode !== "photos" && mode !== "videos" && (
        <ClipFooter mode={mode}>
          <Row flexDirection="column">
            <Col item={24}>
              <Text
                fColor={
                  mode === "clip"
                    ? "gray.600"
                    : mode === "teams"
                    ? "white"
                    : "red.100"
                }
                fSize={mode === "clip" ? 0.875 : mode === "teams" ? 1 : 0.875}
                tAlign={mode === "clip" ? "left" : "center"}
                fWeight={700}
              >
                {title}
              </Text>
            </Col>
            <Col item={24}>
              <Text
                fColor={
                  mode === "clip"
                    ? "gray.600"
                    : mode === "teams"
                    ? "white"
                    : "gray.300"
                }
                tAlign={mode === "clip" ? "left" : "center"}
                fSize={mode === "clip" ? 0.75 : mode === "teams" ? 1 : 0.75}
              >
                {content}
              </Text>
            </Col>
          </Row>
        </ClipFooter>
      )}
    </ClipCardWrapper>
  );
};

export default ClipCard;

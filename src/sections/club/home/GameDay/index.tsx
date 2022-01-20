import React, { useState } from "react";
// import component
import { Col, Row } from "components/Layout";
import { GameCard } from "components/Card";
import { Text } from "components/Text";
import Slider from "react-slick";
import { useLinkItem } from "components/hoc";
import { IoArrowRedoOutline } from "react-icons/io5";
// import styled component
import { GameDayWrapper, LinkWrapper } from "./gameday.style";
// import types
import { GameCardProps } from "types/components/GameCard";
// define example data
import marker from "assets/images/home/mark.png";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { useSubscription } from "@apollo/client";
import { subscribe } from "graphql/match/index";
import { progressText, thumbNailLink } from "utils/common-helper";

// const setting for react slick
const NextArrow: React.FC = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "140px",
      }}
      onClick={onClick}
    />
  );
};

const BeforeArrow: React.FC = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "140px",
      }}
      onClick={onClick}
    />
  );
};

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <NextArrow />,
  prevArrow: <BeforeArrow />,
};
const SeeAll = useLinkItem(LinkWrapper);

const GameDayView: React.FC = (props: any) => {
  const router = useRouter();
  const { club_slug } = router.query;
  const { clubInfo } = props;

  const [data, setData] = useState([]);

  useSubscription(subscribe.SUB_MATCHES, {
    variables: {
      where: {
        club_id: { _eq: clubInfo.id },
        status: { _neq: "completed" },
        is_historic: { _eq: false },
      },
    },
    onSubscriptionData({ subscriptionData: { data } }) {
      data && setData(data.matches);
    },
  });

  const onHandleSeeAll = () => {
    router.push(`/club/${club_slug}/live`);
  };

  const onHandleClick = (id: number) => {
    router.push(`/club/${clubInfo.slug}/match/${id}`);
  };

  return (
    <GameDayWrapper>
      <Row alignItems="center" justifyContent="space-between">
        <Text fColor="white" fSize={20} fWeight={700} mode="p">
          {"Game Day - Live & Upcoming"}
        </Text>
        <SeeAll
          handleClick={onHandleSeeAll}
          title="See all"
          icon={<IoArrowRedoOutline />}
          iconDirection="row-reverse"
          alignVertical="center"
        />
      </Row>
      <Row padding="10px 0 0 0">
        <Col item={24}>
          <Slider {...settings}>
            {data.map((match: any, index: number) => {
              const item: GameCardProps = {
                id: match.id,
                backgroundImage: thumbNailLink(match.video_asset_id, 200),
                clubImage1: match.home_team.club.logo,
                clubName1: match.home_team.club.name,
                clubImage2: match.away_team.club.logo,
                clubName2: match.away_team.club.name,
                leagueImage: match.league.logo ? match.league.logo : marker,
                leagueDivisionName: match.home_team.division,
                roundName: match.round_name,
                matchName: match.name,
                mode: "Day",
                progress: progressText(match.start_datetime, match.status),
                isLive:
                  progressText(match.start_datetime, match.status) ===
                  "In Progress",
                users: 0, //TODO: get the number of users watching
              };

              return (
                <GameCard
                  {...item}
                  key={index}
                  handleClick={() => onHandleClick(match.video_asset_id)}
                />
              );
            })}
          </Slider>
        </Col>
      </Row>
    </GameDayWrapper>
  );
};

const mapStateToProps = (state) => ({
  clubInfo: state.club.info,
});

export default connect(mapStateToProps)(GameDayView);

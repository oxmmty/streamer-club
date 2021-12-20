import React, { useContext, useState } from "react";
//  component
import { Row, Col } from "components/Layout";
import { Table } from "components/Table";
import { Button } from "components/Button";
import { Avatar } from "components/Avatar";
import { CustomModal } from "components/Modal";

//  import react icons
import { BsPlus } from "react-icons/bs";
//  styled component
import { DisplayWrapper } from "./display.style";
// asset
import { Text } from "components/Text";
import { ClubAdminContext } from "pages/club/[club_slug]/admin";

import _ from "lodash";

const Action: React.FC<{ count: number; tid: number }> = ({ tid, count }) => {
  const onHandleEdit = (e: any) => {
    console.log(`Edit team with id ${tid}`);
  };
  return (
    <>
      <Row justifyContent="flex-start" alignItems="center" gap={5}>
        <Col item={7}>
          <Text mode="p" fSize={16}>
            {count}
          </Text>
        </Col>
        <Col item={1}>
          <div onClick={(e: any) => onHandleEdit(e)}>
            <Text
              fSize={16}
              bColor="primary"
              bSize="small"
              tDecorations="underline"
              fColor="gray.200"
              hoverStyle={{ fColor: "white" }}
            >
              {"Edit"}
            </Text>
          </div>
        </Col>
      </Row>
    </>
  );
};

const DisplaySection: React.FC = () => {
  const club = useContext(ClubAdminContext);
  const [show, setShow] = useState<boolean>(false);

  const onModal = (flag: boolean) => {
    console.log(flag);
    // setShow(flag);
  };

  const datasource = () => {
    if (_.isUndefined(club.teams)) {
      return [
        {
          "Team Photo": "",
          "Team Name": "",
          "# of Players": "",
        },
      ];
    }

    return club.teams.map((team) => ({
      "Team Photo": <Avatar src={team.image} Radius="circle" mode="small" />,
      "Team Name": team.division,
      "# of Players": <Action tid={team.id} count={team.players.length} />,
    }));
  };

  return (
    <DisplayWrapper>
      <Row flexDirection="column" gap={20}>
        <Col item={24}>
          <Row justifyContent="flex-end">
            <Button
              bColor="primary"
              bSize="small"
              icon={<BsPlus />}
              onClick={() => onModal(true)}
            >
              {"Add Team"}
            </Button>
          </Row>
        </Col>
        <Col item={24}>
          <Table data={datasource()} />
        </Col>
      </Row>
      {/* <CustomModal show={show} handleClose={() => onModal(false)}>
        <p>Modal</p>
      </CustomModal> */}
    </DisplayWrapper>
  );
};

export default DisplaySection;

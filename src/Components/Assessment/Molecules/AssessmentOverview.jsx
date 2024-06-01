import { Col, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import AssessmentOverviewCard from "./AssessmentOverviewCard";
import PeopleIcon from "../../Icons/PeopleIcon";
import NetworkIcon from "../../Icons/NetworkIcon";
import LinkIcon from "../../Icons/LinkIcon";
import TotalAssessmentIcon from "../../Icons/TotalAssessmentIcon";

const AssessmentData = {
  data1: {
    heading: "Total Assessment",
    bgColor: "#EBE8FD",
    Logo: TotalAssessmentIcon,
    totCount: "34",
  },
  data2: {
    heading: "Candidates",
    bgColor: "#EBE8FD",
    Logo: PeopleIcon,
    totCount: {
      firstSection: {
        totNo: "11,145",
        increaseBy: "89",
        text: "Total Candidate",
      },
      secondSection: {
        totNo: "1,14",
        increaseBy: "89",
        text: "Who Attempted",
      },
    },
  },
  data3: {
    heading: "Candidates Source",
    bgColor: "#FCE8EF",
    Logo: NetworkIcon,
    totCount: {
      firstSection: {
        totNo: "11,000",
        increaseBy: "89",
        text: "E-mail",
      },
      secondSection: {
        totNo: "145",
        increaseBy: "89",
        text: "Social Share",
      },
      thirdSection: {
        totNo: "145",
        increaseBy: "89",
        text: "Unique Link",
      },
    },
  },
  data4: {
    heading: "Total Purpose",
    bgColor: "#E5F1FC",
    Logo: LinkIcon,
    totCount: "11",
  },
};
const AssessmentOverview = () => {
  // Use media query to check if the screen is mobile or tablet
  const isMobAndTab = useMediaQuery({
    query: "(max-width: 765px)",
  });

  return (
    <div>
       {/* Render different layout based on screen size */}
      {isMobAndTab && (
        <Row className="mx-4 my-4 d-flex justify-content-between rounded-4 border-1 col border flex-wrap">
          <Col className="border-bottom">
            <div className=" py-2  order-md-1 order-lg-1">
              <AssessmentOverviewCard data={AssessmentData.data1} />
            </div>
          </Col>
          <Col className="border-bottom">
            <div
              className={`py-2 px-4 border-start order-md-4 order-lg-4
                } `}
            >
              <AssessmentOverviewCard data={AssessmentData.data4} />
            </div>
          </Col>
          <Col className="border-bottom">
            <div
              className={`py-2  order-md-2 order-sm-3 border-start ${
                isMobAndTab ? "border-start-0" : ""
              }`}
            >
              <AssessmentOverviewCard data={AssessmentData.data2} />
            </div>
          </Col>
          <Col>
            <div
              className={`py-2  order-sm-4 order-lg-3 border-start ${
                isMobAndTab
                  ? " border-end-0 border-start-0 border-bottom-0"
                  : ""
              } `}
            >
              <AssessmentOverviewCard data={AssessmentData.data3} />
            </div>
          </Col>
        </Row>
      )}
      {!isMobAndTab && (
        <div className="mx-4 my-2 d-flex justify-content-around rounded-4 border-1 col border flex-wrap">
          {/* <di/v className={`d-flex ${isMobAndTab ? "border-bottom" : ""}`}> */}
          <div className="py-2 px-4 order-md-1 order-lg-1">
            <AssessmentOverviewCard data={AssessmentData.data1} />
          </div>
          <div
            className={`py-2 px-4 border-start order-md-4 order-lg-4`}
          >
            <AssessmentOverviewCard data={AssessmentData.data4} />
          </div>
          {/* </div> */}
          <div
            className={`py-2 px-4 order-md-2 order-sm-3 border-start ${
              isMobAndTab ? "border" : ""
            }`}
          >
            <AssessmentOverviewCard data={AssessmentData.data2} />
          </div>
          <div
            className={`py-2 px-4 order-sm-4 order-lg-3 border-start ${
              isMobAndTab ? " border-end-0 border-start-0 border-bottom-0" : ""
            } `}
          >
            <AssessmentOverviewCard data={AssessmentData.data3} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AssessmentOverview;

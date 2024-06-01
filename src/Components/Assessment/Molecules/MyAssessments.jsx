import AssessmentCard from "../Atoms/AssessmentCard";
import NewAssessment from "../Atoms/NewAssessment";
import { Row, Col } from "react-bootstrap";

// Data for the assessments
const AssessmentCardData = [
  {
    icon: "bag",
    assessmentName: "Math Assessment",
    title: "job",
    date: "20 Apr 2023",
    duration: "60 mins",
    questions: "30",
    share: "LP",
    count:0
  },
  {
    icon: "bag",
    assessmentName: "Chemistry Assessment",
    title: "job",
    date: "10 Mar 2023",
    duration: "40 mins",
    questions: "10",
    share: "LP",
    count:354
  },
  {
    icon: "bag",
    assessmentName: "English Assessment",
    title: "job",
    date: "20 Apr 2023",
    duration: "30 mins",
    questions: "10",
    share: "LP",
    count:264,
  },
  {
    icon: "bag",
    assessmentName: "Physics Assessment",
    title: "job",
    date: "28 Jun 2024",
    duration: "50 mins",
    questions: "25",
    share: "LP",
    count:125,
  },
  {
    icon: "bag",
    assessmentName: "Science Assessment",
    title: "job",
    date: "20 Apr 2023",
    duration: "60 mins",
    questions: "30",
    share: "LP",
    count:112,
  },
];
const MyAssessments = () => {
 

  return (
    <div className="px-4 my-2">
       {/* Row for the assessments */}
    <Row className="d-flex flex-wrap">
       {/* Column for the new assessment button */}
      <Col xs={12} md={6} lg={6} xl={4} style={{ marginBottom: "16px" }}>
        <NewAssessment />
      </Col>
      {AssessmentCardData.map((item, index) => (
        <Col
          key={index}
          xs={12} md={6} lg={6} xl={4}
          style={{ marginBottom: "16px" }}
        >
          <AssessmentCard cardData={item} />
        </Col>
      ))}
    </Row>
  </div>
  );
};

export default MyAssessments;

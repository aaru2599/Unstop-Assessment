import styled from "styled-components";
import PlusIcon from "../../Icons/PlusIcon";
import Modal from "./Modal";
import NewAssessmentForm from "./NewAssessmentForm";
import { useMediaQuery } from "react-responsive";

const AssessText = styled.div`
  text-align: center;
  font-size: 12px;

`;

const NewAssessment = () => {
  // Check if the screen size is mobile or tablet
  const isMobAndTab = useMediaQuery({ query: "(max-width:768px)" });
  
   // Define styles for the new assessment card
  const cardDesktopStyle = {
    height: `${isMobAndTab?"128px":"210px"}`,
    cursor: "pointer",
    border: "1px dashed #DADCE0",
    backgroundColor: "#F6F8FA",
    // width: "100%",
     minWidth: "330px",
    borderRadius:"12px",
  };
  return (
    <div
      className=" cursor-pointer "
      style={cardDesktopStyle}
    >
      <div
        className="p-md-4 p-2 gap-md-4 gap-1 d-flex flex-column align-items-center justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <div
          className="bg-white p-4 fw-bold rounded-circle d-flex align-items-center justify-content-center"
          style={isMobAndTab?{ height: "28px", width: "28px" }:{ height: "60px", width: "60px" }}
        >
          <div>
            <PlusIcon />
          </div>
        </div>
        <div className="fw-medium" style={isMobAndTab?{ fontSize: "14px" }:{fontSize:"18px"}}>
          New Assessment
        </div>
        <AssessText>
          From here, you can add questions of multiple types like MCQs,
          Subjective (text or paragraph)!
        </AssessText>
      </div>

       {/* Render modal with appropriate title based on screen size */}
       <Modal title={isMobAndTab ? "Sub-Section Details" : "Create new assessment"}><NewAssessmentForm/></Modal>
    </div>
  );
};

export default NewAssessment;

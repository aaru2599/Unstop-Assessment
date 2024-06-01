import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const AssessmentOverviewCard = ({ data }) => {
  const { heading, bgColor, Logo, totCount } = data;
  const isMobile = useMediaQuery({ query: "(max-width: 458px)" });

  // Extracting third section data from the total count object
  const thirdData = totCount?.thirdSection?.totNo;

  return (
    <div className="d-flex flex-column py-2">
      {/* Heading */}
      <div>
        <div
          className="fw-medium"
          style={{ fontSize: `${isMobile ? "12px" : ""}` }}
        >
          {heading}
        </div>
      </div>

      {/* Assessment card content */}
      <div className={`d-flex align-items-center`}>
        {/* Logo */}
        <div className="">
          <div
            className="d-flex p-2 rounded-3"
            style={{ backgroundColor: `${bgColor}` }}
          >
            <Logo />
          </div>
        </div>

        {/* Total count */}
        {/* Check if totCount is an object, if yes, render its properties */}
        {typeof totCount === "object" ? (
          <div className={`d-flex gap-3 ${isMobile ? "gap-1" : ""}`}>
            {/* First section */}
            <div className="d-flex flex-column border-end px-2">
              <div className="d-flex align-items-center">
                <div className={`fs-5 fw-bold ${isMobile ? "fs-6" : ""}`}>
                  {totCount?.firstSection?.totNo}
                </div>
                <CountDiv>+{totCount.firstSection.increaseBy}</CountDiv>
              </div>
              <TextDiv>{totCount.firstSection.text}</TextDiv>
            </div>

            {/* Second section */}
            <div className={`${thirdData ? "border-end px-3" : ""}`}>
              <div className="d-flex align-items-center">
                <div className={`fs-5 fw-bold ${isMobile ? "fs-6" : ""}`}>
                  {totCount.secondSection.totNo}
                </div>
                <CountDiv>+{totCount.secondSection.increaseBy}</CountDiv>
              </div>
              <TextDiv>{totCount.secondSection.text}</TextDiv>
            </div>

            {/* Third section (if available) */}
            {totCount?.thirdSection?.totNo && (
              <div>
                <div className="d-flex align-items-center">
                  <div className={`fs-5 fw-bold ${isMobile ? "fs-6" : ""}`}>
                    {totCount?.thirdSection?.totNo}
                  </div>
                  <CountDiv>+{totCount?.thirdSection?.increaseBy}</CountDiv>
                </div>
                <TextDiv>{totCount?.thirdSection?.text}</TextDiv>
              </div>
            )}
          </div>
        ) : (
          // If totCount is not an object, render a single value
          <div
            className={`px-3 d-flex p-2 fs-5 fw-bold ${isMobile ? "fs-6" : ""}`}
          >
            {totCount}
          </div>
        )}
      </div>
    </div>
  );
};

export default AssessmentOverviewCard;

// Styled components
const TextDiv = styled.div`
  font-size: 12px;
`;

const CountDiv = styled.div`
  font-size: 12px;
  color: #15c56f;
  font-weight: bold;
`;

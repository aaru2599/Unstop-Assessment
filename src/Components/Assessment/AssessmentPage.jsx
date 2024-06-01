import { useState } from "react";
import MyAssessments from "./Molecules/MyAssessments";
import AssessmentHeading from "./Atoms/AssessmentHeading";
import SearchIcon from "../Icons/SearchIcon";
import FilterIcon from "../Icons/FilterIcon";
import BarChartIcon from "../Icons/BarChartIcon";
import AssessmentOverview from "./Molecules/AssessmentOverview";
import AssessmentHead from "./Molecules/AssessmentHead";

const AssessmentPage = () => {
  const [isBorderActive, setIsBorderActive] = useState(false);

// border logic for Chatbutton on click
  const handleBtnClick = () => {
    setIsBorderActive((prev) => !prev);
  };

 

  return (
    <div className="bg-white w-100" style={{ color: "#1c4980" }}>
      {/* Top section of assessment page */}
     <AssessmentHead/>

      <div className="d-flex flex-column-reverse justify-content-between align-items-center ">
        <div className="d-flex justify-content-between align-items-center w-100 pt-2">
          <AssessmentHeading data={"My Assessment"} />
          {/* for mobile view only */}
          <div className="d-flex align-items-center gap-3 px-4 d-md-none">
            <div>
              <SearchIcon />
            </div>
            <div className="">
              <FilterIcon />
            </div>
            <div
              className={`${
                isBorderActive
                  ? "d-flex border rounded rounded-5 p-2 border-2"
                  : ""
              }`}
              onClick={handleBtnClick}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <BarChartIcon />
            </div>
          </div>
        </div>
        <div className="collapse d-md-block w-100 " id="collapseExample">
          <div className="d-md-block d-none ">
            <AssessmentHeading data={"Assessment Overview"} />
          </div>
          <div>
            <AssessmentOverview />
          </div>

          {/* <AssessmentOverview/> */}
        </div>
      </div>

      <div className="">
        <MyAssessments />
      </div>
    </div>
  );
};
export default AssessmentPage;

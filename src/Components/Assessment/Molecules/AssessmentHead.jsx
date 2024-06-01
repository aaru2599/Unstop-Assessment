import { useMediaQuery } from "react-responsive";
import LeftDashboard from "../../Icons/LeftDashboard";
import Navigation from "../../Navigation/Navigation";

const AssessmentHead = () => {
  const isMobAndTab = useMediaQuery({
    query: "(max-width: 765px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 458px)",
  });
  return (
    <div>
      <div className=" border-bottom align-items-center">
        <div className="d-lg-flex d-md-flex align-items-center">
          <div className="d-flex ms-md-0 ms-3 align-items-center">
            {/* to open off canvas */}
            <button
              className="border-0 bg-body-secondary p-2  rounded-5 d-md-none"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <LeftDashboard />
            </button>
            <div
              className={`fs-5   p-3 px-md-4  fw-semibold`}
            >
              Assessment
            </div>
          </div>
          <div
            className={`${isMobAndTab ? "d-none" : "border-end border-2"}`}
            style={{ height: "40px" }}
          >
            {" "}
          </div>

          <div className="d-flex   align-items-center justify-content-between">
            <div
              className={`fs-6 border-bottom border-3 border-primary py-3 mx-3 fw-semibold  d-sm-flex d-lg-block text-primary ${
                isMobile ? "fs-6" : ""
              }`}
            >
              My Assessments
            </div>
            <div
              className={`fs-5 d-sm-block p-3  d-md-none ${
                isMobAndTab ? "fs-6" : ""
              }`}
            >
              Unstop Assessment
            </div>
          </div>
        </div>
        <div
          className="offcanvas offcanvas-lg offcanvas-start"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
          style={{ width: "300px" }}
        >
          <div className="offcanvas-header d-flex">
            <div className="">Menu</div>
            <button
              type="button"
              className="btn btn-sm btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="">
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentHead;

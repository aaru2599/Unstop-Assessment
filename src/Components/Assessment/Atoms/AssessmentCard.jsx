import BagIcon from "../../Icons/BagIcon";
import ThreeDotIcon from "../../Icons/ThreeDotIcon";
import CalenderIcon from "../../Icons/Calender";
import ShareIcon from "../../Icons/ShareLink";
import { useMediaQuery } from "react-responsive";
import ScheduleIcon from "../../Icons/ScheduleIcon";

const AssessmentCard = ({ cardData }) => {

  const isMobAndTab = useMediaQuery({ query: "(max-width:768px)" });

  // destructure data from props
  const { assessmentName, date, duration, questions, share, title,count } = cardData;
  const cardStyleForDesk = {
    border: "1px solid #DADCE0",
    borderRadius: "12px",
    height: `${isMobAndTab?"128px":"210px"}`,
    minWidth: "310px",
    width: "auto",
  };
  return (
    <div style={cardStyleForDesk}>
      <div
        className="  d-flex flex-column  p-3 gap-md-3 gap-2"
        // style={{ height: "200px" }}
      >
        <div className="d-flex justify-content-between align-align-items-center">
          <div className="d-flex flex-md-column align-items-md-baseline flex-md-column gap-2">
          <div className="rounded-4 d-flex justify-content-center align-items-center " style={{ backgroundColor: "#ebe8fd" ,height:"50px",width:"50px"}}>
            <div className="    ">
              <BagIcon />
            </div>
          </div>
          <div className="">
            <div className="fw-medium fs-6 fs-md-5">{assessmentName}</div>
            <div className="d-flex gap-2 align-items-center">
              <div className="text-capitalize fw-medium  " style={isMobAndTab?{fontSize:"12px"}:{fontSize:"14px"}}>{title}</div>
              <div
                className="d-flex gap-1 text-center align-items-center border-start  fw-medium px-2"
                style={{ fontSize: "12px" }}
              >
                <div className="d-flex">
                 {
                  isMobAndTab?<ScheduleIcon/>: <CalenderIcon />
                 }
                </div>
                <div className=" text-secondary text-opacity-50">{date}</div>
              </div>
            </div>
          </div>
          </div>
          <div>
            <ThreeDotIcon />
          </div>
        </div>
        <div className="d-flex flex-column gap-3">
         
          <div
            className="d-flex justify-content-between py-2 "
            style={{ borderTop: "1px dashed #DADCE0",  }}
          >
            <div className="d-flex gap-2 ">
              <div>
                <div className=""style={isMobAndTab?{ fontSize: "12px",fontWeight:"600" }:{ fontSize: "14px",fontWeight:"600" }}>{duration}</div>
                <div style={isMobAndTab?{ fontSize: "10px" }:{ fontSize: "12px" }}>Duration</div>
              </div>
              <div>
                <div className=""style={isMobAndTab?{ fontSize: "12px",fontWeight:"600" }:{ fontSize: "14px",fontWeight:"600" }}>{questions}</div>
                <div style={isMobAndTab?{ fontSize: "10px" }:{ fontSize: "12px" }}>Questions</div>
              </div>
            </div>
            <div className="d-flex  gap-5  align-items-center ">
              <div
                className="d-flex align-items-center     gap-1  rounded-pill px-2 py-1"
                style={{ border: "1px solid #1C4980",height:"30px" }}
              >
                 <ShareIcon />
                <div style={isMobAndTab?{fontSize:"12px"}:{fontSize:"14px"}}>Share</div>
              </div>

              <div className="d-flex justify-content-between align-items-center gap-4 me-md-2">
                <div className=" position-relative ">
                  <div
                    className="rounded-circle d-flex justify-content-center align-items-center text-white position-absolute  fw-medium  p-2"
                    style={{
                      backgroundColor: "#3079a1",
                      left: "-30px",
                      bottom: "-15px",
                      height: "25px",
                      width: "25px",
                    }}
                  >
                    {share}
                  </div>
                  <div
                    className="rounded-circle d-flex justify-content-center align-items-center text-white position-absolute fw-medium p-2"
                    style={{
                      backgroundColor: "#6548ee",
                      left: "-20px",
                      bottom: "-15px",
                      height: "25px",
                      width: "25px",
                    }}
                  >
                    {share}
                  </div>
                  <div
                    className="rounded-circle d-flex justify-content-center align-items-center text-white position-absolute fw-medium p-2"
                    style={{
                      backgroundColor: "#e9407a",
                      left: "-10px",
                      bottom: "-15px",
                      height: "25px",
                      width: "25px",
                    }}
                  >
                    {share}
                  </div>
                </div>


               {isMobAndTab && count>0&& <div style={{fontSize:"12px", fontWeight:"600"}}>+{count}</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentCard;

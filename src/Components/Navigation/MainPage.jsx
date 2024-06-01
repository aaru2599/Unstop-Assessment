import { useMediaQuery } from "react-responsive";
import Navigation from "./Navigation";
import AssessmentPage from "../Assessment/AssessmentPage";
// import "/src/Components/Navigation/MainPath.css"

const MainPage = () => {
  const isMobAndTab = useMediaQuery({
    query: "(max-width: 870px)",
  });

  return (
    <div className="bg-body-secondary position-relative">

      {/* for Mobile and tab view */}
      {isMobAndTab ? (
        <div>
          <AssessmentPage />
        </div>
      ) : (
        // for desktop view
        <div className="d-flex gap-3">
          <div className="position-sticky top-0" style={{height:"100vh"}}>
            <Navigation />
          </div>
          <div>
            <AssessmentPage />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;

import React, { Suspense } from "react";
import { Circles } from "react-loader-spinner";

const LazyMainPage = React.lazy(() =>
  import("./Components/Navigation/MainPage")
);

const App = () => {
  return (
    <Suspense
      fallback={
        <div
          className="d-flex flex-column justify-content-center align-items-center  "
          style={{ height: "100vh", color: "#0d6efd" }}
        >
          <div>
            <img
              width={120}
              height={60}
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg"
              alt="logo"
            />{" "}
          </div>
          <div className="fs-6 ">Please Wait</div>
        </div>
      }
    >
      <LazyMainPage />
    </Suspense>
  );
};

export default App;

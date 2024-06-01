import React, { Suspense } from "react";
import { Audio, Circles } from "react-loader-spinner";

const LazyMainPage = React.lazy(() =>
  import('./Components/Navigation/MainPage')
);

const App = () => {
  return (
   <Suspense fallback={<div className="d-flex justify-content-center align-items-center  fs-3 fw-bold" style={{height:"100vh",color:"#0d6efd"}}>Loading...<Circles
   height="80"
   width="80"
   color="#0d6efd"
   ariaLabel="circles-loading"
   wrapperStyle={{}}
   wrapperClass=""
   visible={true}
   /></div>}>
<LazyMainPage/>
   </Suspense>
  );
};

export default App;

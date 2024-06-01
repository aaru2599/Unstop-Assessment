// import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import CrossIcon from "../../Icons/CrossIcon";

const Modal = ({ title, children }) => {
  // Check if the screen size is mobile or tablet
  const isMobAndTab = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <div
      className="modal fade modal-md "
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog "
        style={{ maxWidth: "600px", height: "100vh" }}
      >
        <div className="modal-content position-relative">
          {/* Modal Header */}
          <div className="modal-header position-sticky z-3 bg-light top-0">
            {/* Modal Title */}

            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {title}
            </h1>
             {/* Close button */}
            {isMobAndTab ? (
              <div
                type="button"
                style={{
                  backgroundColor: "#FBEBEA",
                  borderRadius: "60px",
                  padding: "10px",
                }}
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <CrossIcon fill="#D63500" />
              </div>
            ) : (
              <div type="button" data-bs-dismiss="modal" aria-label="Close">
                <CrossIcon />
              </div>
            )}
          </div>
           {/* Modal Body */}
          <div className="modal-body d-flex flex-column gap-3">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

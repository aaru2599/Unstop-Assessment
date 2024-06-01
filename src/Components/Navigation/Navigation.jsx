import styled from "styled-components";
import DashboardIcon from "../Icons/DashboardIcon";
import AdminIcon from "../Icons/Admin";
import AssessmentIcon from "../Icons/AssessmentIcon";
import MyLibraryIcon from "../Icons/MyLibraryIcon";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
const navData = [
  {
    name: "Dashboard",
    Icon: DashboardIcon,
    id: 1,
  },
  {
    name: "Assessment",
    Icon: AssessmentIcon,
    id: 2,
  },
  {
    name: "My Library",
    Icon: MyLibraryIcon,
    id: 3,
  },
];
const Navigation = () => {
  const [selectedNav, setSelectedNav] = useState(2);
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const handleNavClick = (id) => {
    setSelectedNav(id);
  };
  return (
    <DivContainer>
      <div className="border-bottom pb-3  fw-medium">
        {navData.map((data) => {
          return (
            <NavBox
              onClick={() => handleNavClick(data.id)}
              isSelected={selectedNav === data.id}
              className="main-div"
              key={data.id}
            >
              <div>
                <data.Icon />
              </div>
              <div>{data.name}</div>
            </NavBox>
          );
        })}
      </div>
      <div className=" ">
        {isMobile ? (
          <div className="fw-medium d-flex justify-content-between">
            <div className="d-flex gap-2 px-md-4 px-2">
              <div>
                <AdminIcon />
              </div>
              <div className="px-2" style={{ color: "#1c4980" }}>
                Round Status
              </div>
            </div>
            <AdminOuter>Admin</AdminOuter>
          </div>
        ) : (
          <div className="d-flex fw-medium flex-column align-items-center gap-3">
            <AdminOuter>Admin</AdminOuter>
            <div className="w-50 d-flex flex-column gap-2">
              <div>
                <AdminIcon />
              </div>
              <div style={{ color: "#1c4980" }}>Round Status</div>
            </div>
          </div>
        )}
      </div>
    </DivContainer>
  );
};

export default Navigation;
const NavBox = styled.div`
  border-radius: 10px;
  width: 90px;
  height: 70px;
  display: flex;
  justify-content: center;

  flex-direction: column;
  color: ${(props) => (props.isSelected ? "#0073E6" : "#1c4980")};
  background-color: ${(props) => (props.isSelected ? "#E5F1FC" : "white")};
  cursor: pointer;
  border: ${(props) =>
    props.isSelected ? "1px solid #0073E6" : "1px solid white"};

  gap: 5px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: start;
    height: 50px;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 10px;
  }
`;

const DivContainer = styled.div`
  text-align: center;
  padding: 16px 20px 20px 30px;

  position: sticky;
  top: 0px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  font-size: 12px;
  height: 100%;
  background-color: white;
`;

const AdminOuter = styled.div`
  border: 1px solid;
  border-radius: 15px;
  // font-size: 12px;

  margin: 0px 10px;
  width: 50px;
  color: #d63500;
  background-color: #fbebea;
`;

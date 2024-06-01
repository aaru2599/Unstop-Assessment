import { useState } from "react";
import styled from "styled-components";

const skillData = [
  { id: 1, skill: "UI/UX and Design" },
  { id: 2, skill: "Web Development" },
  { id: 3, skill: "UI/UX and Design" },
  { id: 4, skill: "Web Development" },
  { id: 5, skill: "No of Questions" },
];
const NewAssessmentForm = () => {
  // State to manage the list of skills
  const [skills, setSkills] = useState(skillData);

  const [skillValue, setSkillValue] = useState("");

  // Function to remove a skill by its index
  const handleRemoveSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };
  // Function to add a new skill when Enter key is pressed
  const handleAddSkill = (e) => {
    if (e.key === "Enter" && skillValue.trim() !== "") {
      const newSkill = { id: skills.length + 1, skill: skillValue.trim() };
      setSkills([...skills, newSkill]);

      setSkillValue("");
    }
  };
  return (
    <div className="d-flex flex-column gap-3">
      <DivContainer>
        <label htmlFor="assessmentName">Name of assessment</label>
        <input
          id="assessmentName"
          type="text"
          className=" "
          placeholder="Type here"
        />
      </DivContainer>
      <DivContainer>
        <label htmlFor="purposeOfTest">Purpose of the test is</label>

        <select className="  w-100" id="purpose">
          <option value="">Select</option>
          <option value="job">Job</option>
          <option value="internship">Internship</option>
        </select>
      </DivContainer>
      <DivContainer>
        <label htmlFor="description">Description</label>
        <select name="" id="">
          <option value="">Select</option>
          <option value="job">Job</option>
          <option value="internship">Internship</option>
        </select>
      </DivContainer>
      <DivContainer>
        <label htmlFor="skills">Skills</label>
        <div className="border rounded">
          <div className=" p-3  ">
            {skills.length > 0 && (
              <div className="w-full d-flex flex-wrap gap-2   py-2 outline-none">
                {skills.map((item, index) => (
                  <div
                    key={index}
                    className=" px-2 d-flex bg-body-secondary rounded-5 justify-content-between  align-items-center "
                  >
                    <div style={{ fontSize: "12px", fontWeight: "500" }}>
                      {item.skill}
                    </div>
                    <button
                      className="border-0 no-outline bg-transparent "
                      onClick={() => handleRemoveSkill(index)}
                    >
                      <i className="bi bi-x"></i>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="border-top ">
            <input
              type="text"
              value={skillValue}
              onChange={(e) => setSkillValue(e.target.value)}
              onKeyDown={handleAddSkill}
              placeholder="Type here"
              className="border-0 w-100 no-outline"
            />
          </div>
        </div>
      </DivContainer>
      <DivContainer>
        <label htmlFor="duration">Duration of assessment</label>
        <input id="duration" type="text" className="" placeholder="HH:MM:SS" />
      </DivContainer>
      <div className="modal-footer">
        <button type="button" className="w-100 btn btn-primary">
          Save
        </button>
      </div>
    </div>
  );
};

export default NewAssessmentForm;
const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  label {
    color: #1c4980;
    font-size: 16px;
    font-weight: 500;
  }
  select,input {
    height: 50px;
    border-radius: 8px;
    border: 1px solid #DADCE0;
    padding:10px;
    color:#1C4980;
    outline: none;
}
select:focus,input:focus {
  outline:auto;
}
input::placeholder{
  color:#1C4980;
}
  }
`;

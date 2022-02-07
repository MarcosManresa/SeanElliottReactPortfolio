import React from "react";
export const Resume = () => {
  //handles an image for resume and download link for pdf of resume
  return (<>
  <div className="sectionHeader" >
    <title>Resume</title>
    <h1>Resume</h1>
    
  <img src = {require("../../assets/resume/resume.jpg")} id="resumePicture"/>
  
  </div>
  <div>
  <center><a href={require("./SeanElliottResume.pdf")} download id="resumeDownload">Download</a></center>
  </div>
  
  
  </>);
};

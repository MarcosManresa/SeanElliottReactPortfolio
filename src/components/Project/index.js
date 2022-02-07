import React from "react";
import { Card } from "react-bootstrap";

export const Projects = () => {
  //array of objects for application
  //renders cards for each application included in array of objects
  const applications = [
    {
      name: "DidYouSee",
      gitHubLink: "https://github.com/sean-elliott-97/DidYouSee",
      deployedLink: "https://did-you-see.herokuapp.com/",
      image:
        "https://github.com/sean-elliott-97/DidYouSee/raw/main/public/images/homePage.png",
    },
    {
      name: "Logs-For-Dogs",
      gitHubLink: "https://github.com/sean-elliott-97/Logs-for-Dogs",
      deployedLink: "https://sean-elliott-97.github.io/Logs-for-Dogs/",
      image:
        "https://user-images.githubusercontent.com/89947920/139471430-dd6f8cd6-e265-428a-9de7-49a4c93f390c.png",
    },
    {
      name: "Budget-Tracker-PWA",
      gitHubLink: "https://github.com/sean-elliott-97/Budget-Tracker-PWA",
      deployedLink: "https://budget-application-pwa.herokuapp.com/",
      image:
        "https://user-images.githubusercontent.com/89947920/152704916-bc59cac4-e8be-4b23-8a10-70df7f49d732.png",
    },

    {
      name: "WorkDayScheduler",
      gitHubLink: "https://github.com/sean-elliott-97/WorkDayScheduler",
      deployedLink: "https://sean-elliott-97.github.io/WorkDayScheduler/",
      image:
        "https://user-images.githubusercontent.com/89947920/137645954-6ef5a3b5-9696-42c2-ad5d-61757f292bc5.png",
    },
    {
      name: "PasswordGenerator",
      gitHubLink: "https://github.com/sean-elliott-97/PasswordGenerator",
      deployedLink: "https://sean-elliott-97.github.io/PasswordGenerator/",
      image:
        "https://user-images.githubusercontent.com/89947920/135760428-5c2fdaf1-d462-4beb-aa6a-925058b352a6.png",
    },
    {
      name: "Horiseon Code Refactor",
      gitHubLink: "https://github.com/sean-elliott-97/HoriseonCodeRefactor",
      deployedLink: "https://sean-elliott-97.github.io/HoriseonCodeRefactor/",
      image:
        "https://user-images.githubusercontent.com/89947920/133946045-e2fb1725-836b-4ebe-897a-1d1ace8d89ca.png",
    },
  ];

  return (
    <section className="sectionHeader">
      <title>Project</title>
      <div className="row">
        <h1>Projects</h1>
        {applications.map((app, i) => (
          <Card key={i} className="col-sm-4 card">
            <Card>
              <Card.Img className="projectImage" src={app.image} />
              <Card.Title>{app.name}</Card.Title>
              <a href={app.gitHubLink} target="true">
                <Card.Text>{app.name} Repo</Card.Text>
              </a>
              <a href={app.deployedLink} target="true">
                <Card.Text>{app.name} Deployed</Card.Text>
              </a>
            </Card>
          </Card>
        ))}
      </div>
    </section>
  );
};

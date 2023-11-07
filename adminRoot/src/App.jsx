import React from 'react';

const App = () => {
  const Trainee = ({ name }) => (
    <div>{name}</div>
  );
  const SiteAdmin = ({ name, trainees }) => (
    <div>
      <strong>{name}</strong>
      <div>
      {trainees.map((trainee, index) => (
          <Trainee key={index} name={trainee} />
        ))}
      </div>
    </div>
  );
  const CompanyAdmin = ({ name, siteAdmins, trainees }) => (
    <div>
      <h3>{name}</h3>
      <div>
        {siteAdmins.map((siteAdmin, index) => (
          <SiteAdmin key={index} {...siteAdmin} />
        ))}
      </div>
      <div>
        {trainees.map((trainee, index) => {
          <Trainee key={index} name={trainee} />
})}
      </div>
    </div>
  );
  const RootAdmin = ({ name, companyAdmins }) => (
    <div>
      <h2>{name}</h2>
      <div>
        {companyAdmins.map((companyAdmin, index) => (
          <CompanyAdmin key={index} {...companyAdmin} />
        ))}
      </div>
    </div>
  );
  const hierarchy = {
    name: "Sudha",
    companyAdmins: [
      {
        name: "Narayan",
        trainees: ["Trainee1", "Trainee2", "Trainee3"],
      },
      {
        name: "Nanda",
        siteAdmins: [
          {
            name: "Chandra",
            trainees: ["ChandraTrainee1", "ChandraTrainee2", "ChandraTrainee3"],
          },
          {
            name: "Rocky",
            trainees: ["RockyTrainee1", "RockyTrainee2"],
          },
        ],
        trainees: ["NandaTrainee1", "NandaTrainee2", "NandaTrainee3"],
      },
      {
        name: "Ratan",
      },
    ],
  };

  return (
    <div>
      <RootAdmin {...hierarchy} />
    </div>
  );
};

export default App;
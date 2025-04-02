// src/TeamMembers.js
import React from 'react';

const TeamMembers = () => {
  return (
    <section className='team'>
      <div className="team container">
        <div className="team-members">
          {/* First Person */}
          <div className="member">
            <img
              alt="Portrait of a man with a beard wearing a red and white striped shirt"
              className="member-image"
              height="400"
              src="src/assets/img/Nawaaz_2.jpg"
              width="300"
            />
            <h2 className="member-name">NAWAAZ</h2>
            <p className="member-role">DIRECTEUR DE CRÉATION</p>
            <p className="member-role">DÉNICHEUR DE TENDANCES</p>
            <p className="member-tags">#SENSIBLE #ÉMOTION</p>
          </div>
          {/* Second Person */}
          <div className="member">
            <img
              alt="Portrait of a man with a beard wearing a white shirt"
              className="member-image opacity-50"
              height="400"
              src="src/assets/img/Laurent.jpg"
              width="300"
            />
            <h2 className="member-name">DIRECTEUR ASSOCIÉ</h2>
            <p className="member-role">DÉNICHEUR DE CONCEPT</p>
            <p className="member-tags">#efficacité #expérience</p>
          </div>
          {/* Third Person */}
          <div className="member">
            <img
              alt="Portrait of a woman with curly hair wearing an orange shirt"
              className="member-image"
              height="400"
              src="src/assets/img/Vanessa_0.jpg"
              width="300"
            />
            <h2 className="member-name">VANESSA CHELLEN</h2>
            <p className="member-role">DIRECTEUR TECHNIQUE</p>
            <p className="member-role">DÉCOUVREUSE DE SOLUTIONS</p>
            <p className="member-tags">#INNOVATION #SÉCURITÉ</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
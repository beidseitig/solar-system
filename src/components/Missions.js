import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((elem) => (
          <div key={ elem.name }>
            <MissionCard
              name={ elem.name }
              year={ elem.year }
              country={ elem.country }
              destination={ elem.destination }
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Missions;

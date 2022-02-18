import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div>
        <Title headline="Planetas" />
        <div data-testid="solar-system">
          {Planets.map((elem) => (
            <div key={ elem.name }>
              <PlanetCard planetName={ elem.name } planetImage={ elem.image } />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;

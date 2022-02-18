import React from 'react';
import PropTypes from 'prop-types';
import Kratos from '../images/Kratos.jpg';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;

    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img
          data-testid="planet-name"
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
        ;
      </div>
    );
  }
}

PlanetCard.defaultProps = {
  planetName: 'Kratos killed it...',
  planetImage: Kratos,
};

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
};

export default PlanetCard;

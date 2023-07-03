import { Planet } from '../models/planet';
import { ToPowerOf10 } from '../utilities/mathUtilities';

export interface PlanetInfoProps {
    planet: Planet;
}

function PlanetInfo({ planet }: PlanetInfoProps) {
    return (
        <div className='text-center container'>
            <div className='row'>
                <div className='col'>
                    <img
                        src={planet.imageUrl}
                        alt={planet.name + 'image'}
                        className='img-fluid' />
                </div>
                <div className='col text-center align-self-center'>
                    <h2 className='display-4'>{planet.name}</h2>
                    <br />
                    <h4 className='text-secondary'>Distance From the Sun</h4>
                    <h3> {ToPowerOf10(
                        planet.distanceFromSun,
                        planet.distanceFromSunPower).toLocaleString()} km</h3>
                    <br />
                    <h4 className='text-secondary'>Mass</h4>
                    <h3>{ToPowerOf10(
                        planet.mass,
                        planet.massPower).toLocaleString()} kg</h3>
                    <br />
                    <h4 className='text-secondary'>Diameter</h4>
                    <h3>{planet.diameter.toLocaleString()} km</h3>
                </div>
            </div>
        </div>)
};

export default PlanetInfo;
import { Planet } from '../models/planet';
import { ToPowerOf10 } from '../utilities/mathUtilities';

export interface PlanetInfoProps {
    planet: Planet;
}

function PlanetInfo({ planet }: PlanetInfoProps) {
    const distanceFromTheSunFormatted = ToPowerOf10(
        planet.distanceFromSun,
        planet.distanceFromSunPower).toLocaleString() + ' km';

    const massFormatted = ToPowerOf10(
        planet.mass,
        planet.massPower).toLocaleString() + ' kg';

    const diameterFormatted = planet.diameter.toLocaleString() + ' km';

    return (
        <div className='text-center container'>
            <div className='row'>
                <div className='col'>
                    <img
                        src={planet.imageUrl}
                        alt={planet.name + ' Image'}
                        className='img-fluid' />
                </div>
                <div className='col text-center align-self-center'>
                    <h2 className='display-4'>{planet.name}</h2>
                    <br />
                    <h4 className='text-secondary'>Distance From the Sun</h4>
                    <h3>{distanceFromTheSunFormatted}</h3>
                    <br />
                    <h4 className='text-secondary'>Mass</h4>
                    <h3>{massFormatted}</h3>
                    <br />
                    <h4 className='text-secondary'>Diameter</h4>
                    <h3>{diameterFormatted}</h3>
                </div>
            </div>
        </div>)
};

export default PlanetInfo;
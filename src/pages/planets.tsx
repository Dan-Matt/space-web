import { useEffect, useState } from 'react';
import axios from 'axios';
import PlanetButton from '../components/planetButton';
import './planets.css';
import { Planet } from '../models/planet';
import { ToPowerOf10 } from '../utilities/mathUtilities';
import PlanetInfo from '../components/planetInfo';
import config from '../config.json';

function Planets() {
    const [planets, setPlanets] = useState<Planet[]>([]);
    const [selectedPlanet, setSelectedPlanet] = useState<Planet>();

    useEffect(() => {
        const getPlanets = async () => {
            try {
                const response = await axios.get(config.ApiUrl + 'Planet');
                setPlanets(response.data);
            }
            catch (error) {
                console.error(error);
            }
        }

        getPlanets();
    }, []);

    useEffect(() => {
        setSelectedPlanet(planets.filter(x => x.name == 'Earth')[0])
    }, [planets]);

    const onPlanetClick = function (planet: Planet) {
        setSelectedPlanet(planet);
    }

    const planetsOrdered = planets.sort((a, b) =>
        ToPowerOf10(a.distanceFromSun, a.distanceFromSunPower)
            > ToPowerOf10(b.distanceFromSun, b.distanceFromSunPower) ? 1 : 0);

    return (
        <div className='planets'>
            <h1 className='text-center display-1'>Planets in Our Solar System</h1>
            <br />
            <div className='container'>
                <div className='row'>
                    {planetsOrdered.map(x =>
                        <div className='col' onClick={() => onPlanetClick(x)}>
                            <PlanetButton
                                key={x.name}
                                planet={x}
                                selected={selectedPlanet?.name == x.name} />
                        </div>
                    )}
                </div>
            </div>
            <br />
            {selectedPlanet &&
                <PlanetInfo planet={selectedPlanet} />}
        </div>)
};

export default Planets;
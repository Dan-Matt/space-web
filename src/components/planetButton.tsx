import React from 'react';
import { Planet } from '../models/planet';

export interface PlanetCardProps {
    planet: Planet;
    selected: boolean;
}

function PlanetButton({ planet, selected }: PlanetCardProps) {
    return (
        <div className={selected ? 'border-bottom' : ''}>
            <img
                src={planet.imageUrl}
                alt={planet.name + 'image'}
                className='img-fluid' />
            <h3 className={'text-center ' + (selected ? '' : 'text-secondary')}>
                {planet.name}
            </h3>
        </div>)
};

export default PlanetButton;
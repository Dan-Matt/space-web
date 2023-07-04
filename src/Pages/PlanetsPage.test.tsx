import '@testing-library/jest-dom';
import * as React from 'react';
import { render, fireEvent, screen, cleanup, waitFor } from '@testing-library/react';
import PlanetsPage from './PlanetsPage';
import axios from 'axios';
import { mockPlanets } from '../Models/Mocks/PlanetMocks';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

afterEach(cleanup);

test('shows title, planet buttons and first planet info', async () => {
    mockedAxios.get.mockResolvedValue({ data: mockPlanets });

    render(<PlanetsPage />);

    expect(screen.getByText('Planets in Our Solar System')).toBeInTheDocument();

    await Promise.all(mockPlanets.map(async (x) => {
        await screen.findByText(x.name);
    }));

    await screen.findByText('Distance From the Sun');
    expect(screen.getByText('100 km')).toBeInTheDocument();

    expect(screen.getByText('Mass')).toBeInTheDocument();
    expect(screen.getByText('30,000 kg')).toBeInTheDocument();

    expect(screen.getByText('Diameter')).toBeInTheDocument();
    expect(screen.getByText('5 km')).toBeInTheDocument();
});

test('shows selected planet info', async () => {
    mockedAxios.get.mockResolvedValue({ data: mockPlanets });

    render(<PlanetsPage />);

    await screen.findByText(mockPlanets[1].name);
    fireEvent.click(screen.getByText(mockPlanets[1].name));

    await screen.findByText('Distance From the Sun');
    expect(screen.getByText('2,000 km')).toBeInTheDocument();

    expect(screen.getByText('Mass')).toBeInTheDocument();
    expect(screen.getByText('400,000 kg')).toBeInTheDocument();

    expect(screen.getByText('Diameter')).toBeInTheDocument();
    expect(screen.getByText('6 km')).toBeInTheDocument();
});

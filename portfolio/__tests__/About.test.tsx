import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../app/components/About';

// filepath: /Users/jimi/Documents/GitHub/jimiademola/portfolio/app/components/__tests__/About.test.jsx

// Mock the assets and infoList
jest.mock('../assets/assets', () => ({
    assets: {
        user_image: '/mock-image.jpg',
    },
    infoList: [
        {
            icon: '/mock-icon.png',
            iconDark: '/mock-icon-dark.png',
            title: 'Test Title',
            description: 'Test Description'
        }
    ]
}));

// Mock next/image
jest.mock('next/image', () => ({
    __esModule: true,
    default: (props) => <img {...props} />
}));

describe('About Component', () => {
    beforeEach(() => {
        render(<About />);
    });

    test('renders the About section with correct headings', () => {
        expect(screen.getByText('Introduction')).toBeInTheDocument();
        expect(screen.getByText('About Me')).toBeInTheDocument();
    });

    test('renders the profile image with correct alt text', () => {
        const image = screen.getByAltText('Jimi Ademola presenting for the Kingsland Children Charity');
        expect(image).toBeInTheDocument();
    });

    test('renders the introduction paragraph', () => {
        const intro = screen.getByText(/I am currently a student at the University of British Columbia/i);
        expect(intro).toBeInTheDocument();
    });

    test('renders the info list items', () => {
        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText('Test Description')).toBeInTheDocument();
    });

    test('has correct responsive layout classes', () => {
        const mainContainer = screen.getByRole('heading', { name: /about me/i }).parentElement;
        expect(mainContainer).toHaveClass('w-full');
        expect(mainContainer).toHaveClass('px-[12%]');
    });

    test('contains exactly one list for info items', () => {
        const lists = screen.getAllByRole('list');
        expect(lists).toHaveLength(1);
    });
});
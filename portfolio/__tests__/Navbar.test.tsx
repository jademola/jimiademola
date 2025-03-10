import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../app/components/Navbar';

// Mock the assets
jest.mock('../assets/assets', () => ({
    assets: {
        header_bg_color: '/mock-bg.png',
        logo: '/mock-logo.png',
        moon_icon: '/mock-moon.png',
        arrow_icon: '/mock-arrow.png',
        menu_black: '/mock-menu.png',
        close_black: '/mock-close.png'
    }
}));

// Mock next/image
jest.mock('next/image', () => ({
    __esModule: true,
    default: (props) => <img {...props} />
}));

describe('Navbar Component', () => {
    beforeEach(() => {
        render(<Navbar />);
    });

    test('renders logo and navigation links', () => {
        expect(screen.getByRole('img', { name: '' })).toBeInTheDocument(); // Logo
        expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /about me/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /experiences/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /my work/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /tech stack/i })).toBeInTheDocument();
    });

    test('renders contact button in desktop view', () => {
        const contactButton = screen.getByRole('link', { name: /contact/i });
        expect(contactButton).toBeInTheDocument();
        expect(contactButton).toHaveClass('hidden', 'lg:flex');
    });

    test('renders theme toggle button', () => {
        const themeButton = screen.getByRole('button');
        expect(themeButton).toBeInTheDocument();
        expect(themeButton.querySelector('img')).toHaveAttribute('src', '/mock-moon.png');
    });

    test('mobile menu functionality', () => {
        const menuButton = screen.getByRole('button', { name: '' });
        const sideMenu = screen.getByRole('list', { hidden: true });
        
        // Initial state
        expect(sideMenu).toHaveStyle({ transform: '' });
        
        // Open menu
        fireEvent.click(menuButton);
        expect(sideMenu).toHaveStyle({ transform: 'translateX(-16rem)' });
        
        // Close menu
        const closeButton = screen.getByRole('img', { name: '' });
        fireEvent.click(closeButton);
        expect(sideMenu).toHaveStyle({ transform: 'translateX(16rem)' });
    });

    test('mobile menu links close menu when clicked', () => {
        const links = screen.getAllByRole('link');
        const sideMenu = screen.getByRole('list', { hidden: true });

        links.forEach(link => {
            if (link.classList.contains('font-Ovo')) {
                fireEvent.click(link);
                expect(sideMenu).toHaveStyle({ transform: 'translateX(16rem)' });
            }
        });
    });
});
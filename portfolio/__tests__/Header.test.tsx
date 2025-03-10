import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../app/components/Header';

// filepath: /Users/jimi/Documents/GitHub/jimiademola/portfolio/__tests__/Header.test.tsx

// Mock the assets
jest.mock('../assets/assets', () => ({
        assets: {
                profile_img: '/mock-profile.jpg',
                hand_icon: '/mock-hand.png',
                right_arrow_white: '/mock-arrow.png',
                download_icon: '/mock-download.png'
        }
}));

// Mock next/image
jest.mock('next/image', () => ({
        __esModule: true,
        default: (props) => <img {...props} />
}));

describe('Header Component', () => {
        beforeEach(() => {
                render(<Header />);
        });

        test('renders profile image', () => {
                const profileImage = screen.getByRole('img', { 
                        name: "Jimi Ademola's profile picture" 
                });
                expect(profileImage).toBeInTheDocument();
                expect(profileImage).toHaveClass('rounded-full', 'w-32');
        });

        test('renders greeting text', () => {
                expect(screen.getByText("Hi! I'm Jimi")).toBeInTheDocument();
        });

        test('renders role description', () => {
                expect(screen.getByText(/a software developer based in Canada/i)).toBeInTheDocument();
        });

        test('renders portfolio description', () => {
                const description = screen.getByText(/Welcome to my portfolio!/i);
                expect(description).toBeInTheDocument();
                expect(description).toHaveClass('font-Ovo');
        });

        test('renders contact button with correct attributes', () => {
                const contactButton = screen.getByRole('link', { name: /contact me/i });
                expect(contactButton).toHaveAttribute('href', '#contact');
                expect(contactButton).toHaveClass('bg-black', 'text-white');
        });

        test('renders resume button with correct attributes', () => {
                const resumeButton = screen.getByRole('link', { name: /resume/i });
                expect(resumeButton).toHaveAttribute('href', '/Jimi_Ademola_CV_2025.pdf');
                expect(resumeButton).toHaveAttribute('download');
        });

        test('has responsive layout container', () => {
                const container = screen.getByRole('heading', { name: /a software developer/i }).parentElement;
                expect(container).toHaveClass('w-11/12', 'max-w-3xl');
        });

        test('buttons container has correct responsive classes', () => {
                const buttonsContainer = screen.getByRole('link', { name: /contact me/i }).parentElement;
                expect(buttonsContainer).toHaveClass('flex', 'flex-col', 'sm:flex-row');
        });
});
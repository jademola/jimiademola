import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Skills } from '../app/components/Skills';

// Mock react-icons
jest.mock('react-icons/fa', () => ({
  FaReact: () => <div data-testid="mock-icon">React Icon</div>,
  FaUnity: () => <div data-testid="mock-icon">Unity Icon</div>,
  FaPython: () => <div data-testid="mock-icon">Python Icon</div>
}));

jest.mock('react-icons/si', () => ({
  SiNextdotjs: () => <div data-testid="mock-icon">Next.js Icon</div>,
  SiTailwindcss: () => <div data-testid="mock-icon">Tailwind Icon</div>,
  SiAdobephotoshop: () => <div data-testid="mock-icon">Photoshop Icon</div>,
  SiR: () => <div data-testid="mock-icon">R Icon</div>,
  SiGit: () => <div data-testid="mock-icon">Git Icon</div>
}));

jest.mock('react-icons/bi', () => ({
  BiLogoTypescript: () => <div data-testid="mock-icon">TypeScript Icon</div>
}));

jest.mock('react-icons/fa6', () => ({
  FaDocker: () => <div data-testid="mock-icon">Docker Icon</div>,
  FaJava: () => <div data-testid="mock-icon">Java Icon</div>,
  FaLinux: () => <div data-testid="mock-icon">Linux Icon</div>
}));

describe('Skills Component', () => {
  beforeEach(() => {
    render(<Skills />);
  });

  test('renders the Tech Stack heading', () => {
    const heading = screen.getByText('Tech Stack');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('font-Ovo');
  });

  test('renders all skill icons', () => {
    const icons = screen.getAllByTestId('mock-icon');
    expect(icons).toHaveLength(12); // Total number of skills
  });

  test('renders all skill names', () => {
    const skillNames = [
      'React', 'Next.js', 'Docker', 'TypeScript', 
      'Adobe Photoshop', 'R', 'Python', 'Unity 6',
      'Tailwind CSS', 'Java', 'Linux', 'Git'
    ];

    skillNames.forEach(name => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  test('renders the additional skills message', () => {
    const message = screen.getByText(/...and more! Plus I'm always adding to my skills./);
    expect(message).toBeInTheDocument();
    expect(message).toHaveClass('font-Ovo');
  });

  test('renders with correct grid layout classes', () => {
    const grid = screen.getByRole('list') || screen.getByRole('grid');
    expect(grid).toHaveClass('grid', 'grid-cols-2', 'sm:grid-cols-3', 'lg:grid-cols-4');
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import UserProfileCard from './UserProfileCard';

describe('UserProfileCard Component', () => {
  const mockUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: 'https://example.com/avatar.jpg',
  };

  it('renders user info correctly', () => {
    render(<UserProfileCard {...mockUser} />);
    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    expect(screen.getByText(`Email: ${mockUser.email}`)).toBeInTheDocument();
    expect(screen.getByAltText('User Avatar')).toHaveAttribute(
      'src',
      mockUser.avatarUrl
    );
  });
});

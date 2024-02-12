// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render('<App />');
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import Contact from './components/Contact/index';

describe('Contact component', () => {
  it('submits the form correctly', async () => {
    const { getByLabelText, getByText } = render(<Contact />);

    fireEvent.change(getByLabelText(/Your Name/i), { target: { value: 'Test User' } });
    fireEvent.change(getByLabelText(/Your Email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(getByLabelText(/Message/i), { target: { value: 'This is a test message' } });

    fireEvent.click(getByText(/Submit/i));

    await waitFor(() => {
      
      expect(getByText(/Email sent successfully/i)).toBeInTheDocument();
    });
  });
});
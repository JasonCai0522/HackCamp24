import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


function getLocation() {
  if (navigator.geolocation) {
      console.log(navigator.geolocation.getCurrentPosition())
  } else {
      console.log("xd") 
  }
}



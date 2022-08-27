import { render } from '@testing-library/react';
import Home from './index';

describe('Index Page', () => {
  it('should render page', () => {
    render(<Home />);
  });
});

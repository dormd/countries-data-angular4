import { CountriesDataAngular4Page } from './app.po';

describe('countries-data-angular4 App', () => {
  let page: CountriesDataAngular4Page;

  beforeEach(() => {
    page = new CountriesDataAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

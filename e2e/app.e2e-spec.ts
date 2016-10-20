import { TourofHeroesPage } from './app.po';

describe('tourof-heroes App', function() {
  let page: TourofHeroesPage;

  beforeEach(() => {
    page = new TourofHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

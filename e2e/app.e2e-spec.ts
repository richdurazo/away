import { AwayPage } from './app.po';

describe('away App', () => {
  let page: AwayPage;

  beforeEach(() => {
    page = new AwayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { Ng4MaterialPage } from './app.po';

describe('ng4-material App', () => {
  let page: Ng4MaterialPage;

  beforeEach(() => {
    page = new Ng4MaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

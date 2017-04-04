import { MaxProjectPage } from './app.po';

describe('max-project App', () => {
  let page: MaxProjectPage;

  beforeEach(() => {
    page = new MaxProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

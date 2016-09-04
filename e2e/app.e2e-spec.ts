import { MehPage } from './app.po';

describe('meh App', function() {
  let page: MehPage;

  beforeEach(() => {
    page = new MehPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

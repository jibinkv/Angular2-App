import { Angular2.0AppPage } from './app.po';

describe('angular2.0-app App', () => {
  let page: Angular2.0AppPage;

  beforeEach(() => {
    page = new Angular2.0AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

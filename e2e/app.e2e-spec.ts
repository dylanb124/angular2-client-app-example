import { Angular2ClientAppExamplePage } from './app.po';

describe('angular2-client-app-example App', () => {
  let page: Angular2ClientAppExamplePage;

  beforeEach(() => {
    page = new Angular2ClientAppExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

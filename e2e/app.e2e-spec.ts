import { NGGitRepoDemoPage } from './app.po';

describe('nggit-repo-demo App', () => {
  let page: NGGitRepoDemoPage;

  beforeEach(() => {
    page = new NGGitRepoDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('My Shows');
  });

  it('should go to search page', async () => {
    page.enterSearchTerm('friends');
    page.clickSearchButton();

    const searching: boolean = await page.isOnSearchPage();
    expect(searching).toBe(true);
  });
});

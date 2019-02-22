import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  enterSearchTerm(query: string) {
    const input = element(by.tagName('input'));
    input.sendKeys(query);
  }

  async isOnSearchPage() {
    const url: string = await browser.getCurrentUrl();
    return url.startsWith('http://localhost:4200/search');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  clickSearchButton() {
    return element(by.tagName('button')).click();
  }
}

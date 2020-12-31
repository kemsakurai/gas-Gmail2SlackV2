import i18next from "./i18n";
describe("i18n", () => {
  describe("t()", () => {
    it("initialSetting ja", () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Session.getActiveUserLocale = jest.fn().mockImplementation(name => {
        return "ja";
      });
      const actual = i18next.t("initialSetting");
      const expected = "初期設定";
      expect(actual).toBe(expected);
    });
    it("initialSetting en", () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Session.getActiveUserLocale = jest.fn().mockImplementation(name => {
        return "en";
      });
      const actual = i18next.t("initialSetting");
      const expected = "Initial setting";
      expect(actual).toBe(expected);
    });
    it("webhookURLIsNotSet en", () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Session.getActiveUserLocale = jest.fn().mockImplementation(name => {
        return "en";
      });
      const actual = i18next.t("webhookURLIsNotSet");
      const expected = "Webhook URL is not set. Set the webhook URL.";
      expect(actual).toBe(expected);
    });
  });
});

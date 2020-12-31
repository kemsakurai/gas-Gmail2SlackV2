export default class Utils {
  public static fetchAsJson(
    url: string,
    requestOptions: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): any {
    const response = UrlFetchApp.fetch(url, requestOptions);
    return JSON.parse(response.getContentText());
  }
  /**
   * truncate
   * @param value
   * @param length
   */
  public static truncate(value: string, length: number): string {
    if (value.length <= length) {
      return value;
    }
    return value.substring(0, length) + "...";
  }
  /**
   * setWebhookURL
   * @param token
   */
  public static setWebhookURL(token: string): void {
    PropertiesService.getScriptProperties().setProperty(
      "SLACK_WEBHOOK_URL",
      token
    );
  }
  /**
   * getWebhookURL
   */
  public static getWebhookURL(): string {
    return PropertiesService.getScriptProperties().getProperty(
      "SLACK_WEBHOOK_URL"
    );
  }
  /**
   * checkNotEmpty
   */
  public static checkNotEmpty(value: string, message: string): void {
    if (typeof value === "undefined" || value == "") {
      throw new Error(message);
    }
  }
  /**
   * getConfigSheetName
   */
  public static getConfigSheetName(): string {
    return "Config";
  }
}

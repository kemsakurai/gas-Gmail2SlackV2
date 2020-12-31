import Utils from "../libs/Utils";
import Gmail2Slack from "../libs/Gmail2Slack";

export const sendEmail2Slack = (): void => {
  console.info("sendEmail2Slack start");
  const sheet: GoogleAppsScript.Spreadsheet.Sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
    Utils.getConfigSheetName()
  );
  const range: GoogleAppsScript.Spreadsheet.Range = sheet.getRange(
    2,
    1,
    sheet.getLastRow() - 1,
    5
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const queries: any[][] = range.getValues();
  for (const elem of queries) {
    // Notes、WebHookUrl、Queryは必須、設定がなければSkipする
    if (elem[0] == "" || elem[1] == "" || elem[4] == "") {
      continue;
    }
    const gmail2Slack = new Gmail2Slack(
      elem[0],
      elem[1],
      elem[2],
      elem[3],
      elem[4]
    );
    gmail2Slack.postMessage();
  }
  console.info("sendEmail2Slack end");
};

import Utils from "../libs/Utils";

export const initialize = (): void => {
  console.info("initialize start");
  const configSheetName: string = Utils.getConfigSheetName();
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
    configSheetName
  );
  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet();
    sheet.setName(configSheetName);
    const range = sheet.getRange("A1:E1");
    range.setBackground("yellow");
    const headers: string[] = [];
    headers.push("Tag");
    headers.push("Webhook URL");
    headers.push("SendTo");
    headers.push("Message body length");
    headers.push("Query");
    range.setValues([headers]);
  }
  console.info("initialize end");
};

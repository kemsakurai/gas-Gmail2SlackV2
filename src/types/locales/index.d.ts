declare module "*/translation.json" {
  interface Translation {
    initialSetting: string;
    createConfigSheets: string;
    inputWebhookURL: string;
    sendEmailToSlack: string;
    scheduleExecution: string;
  }
  const value: Translation;
  export = value;
}

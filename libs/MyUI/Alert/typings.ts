export interface IAlertOptions {
  duration?: number,
  headerTitle?: string;
  alertText?: string;
}

export enum DEFAULT_VALUES {
  HEADER_TITLE = "THIS IS MY alert",
  ALERT_TEXT = "THIS IS MY ALERT CONTENT",
  DURATION = 150
}

export enum UI_COLOR_TYPE {
  PRIMARY = "primary",
  SUCCESS = "success",
  DANGER = "danger",
  WARNING = "warning"
}
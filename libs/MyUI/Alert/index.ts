import Template from "./Template";
import { DEFAULT_VALUES, IAlertOptions, UI_COLOR_TYPE } from "./typings";
import $ from "jquery"

class Alert extends Template {
  private _headerTitle: string;
  private _alertText: string;
  private _duration: number;
  private _oAlert: JQuery<HTMLElement>;
  private _oXIcon: JQuery<HTMLElement>;
  private _oInner: JQuery<HTMLElement>;
  private _oHeaderTitle: JQuery<HTMLElement>;
  private _oAlertText:JQuery<HTMLElement>;

  constructor(options: IAlertOptions) {
    super();
    this._headerTitle = options.headerTitle || DEFAULT_VALUES.HEADER_TITLE;
    this._alertText = options.alertText || DEFAULT_VALUES.ALERT_TEXT;
    this._duration = options.duration || DEFAULT_VALUES.DURATION;
    this.render();
    this.bindEvent();
  }
  
  private bindEvent() {
    this._oXIcon.on("click", this.hide.bind(this));
    this._oAlert.on("click", this.hide.bind(this));
    this._oInner.on("click", (e) => e.stopImmediatePropagation())
  }

  private render() {
    document.body.appendChild(this.alertView({
      headerTitle: this._headerTitle,
      alertText: this._alertText
    }))
    this._oAlert = $(".alert");
    this._oXIcon = $(".icon");
    this._oInner = $(".inner");
    this._oHeaderTitle = this._oAlert.find("header h1");
    this._oAlertText = this._oAlert.find(".alert-wrap p");
  }
  public static create(options: IAlertOptions) {
    return new Alert(options);
  }

  public show(type: string, options: IAlertOptions) {
    console.log(type, options);
    const { headerTitle, alertText, duration } = options;

    let _type: UI_COLOR_TYPE = UI_COLOR_TYPE.PRIMARY;

    for (let k in UI_COLOR_TYPE) {
      if (UI_COLOR_TYPE[k] === type) {
        _type = type as UI_COLOR_TYPE;
      }
    }
    this._oAlert.addClass(type);
    this._duration = duration || this._duration;
    headerTitle && this._oHeaderTitle.html(headerTitle);
    alertText && this._oAlertText.html(alertText);
    this._oAlert.fadeIn(this._duration);
  }

  public hide() {
    this._oAlert.fadeOut(this._duration);
  }
}

export default Alert;
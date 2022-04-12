import { Alert } from "../libs/MyUI";

; ((doc) => {
  const oShowAlert: HTMLElement = doc.querySelector("#showAlert");

  const alert = Alert.create({
    duration: 300,
    headerTitle: "这是我的第一个alert",
    alertText: "上海加油,中国加油"
  })
  const init = (): void => {
    bindEvent();
  }

  function bindEvent(): void {
    oShowAlert.addEventListener("click", showAlert, false);
  }

  function showAlert():void {
    alert.show("warning", {
      duration:400,
      headerTitle: "这是我的第一个alert第二个title",
      alertText: "上海加油,中国加油"
    })
  }
  init();
})(document)
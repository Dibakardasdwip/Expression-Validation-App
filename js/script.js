class UI {
  constructor() {
    this.form = document.querySelector("#myForm");
    this.checkBtn = document.querySelector("#check-btn");
    this.email = document.querySelector("#Email");
    this.phone = document.querySelector("#Phone-Number");
    this.post = document.querySelector("#Post-Code");
    this.messagePl = document.querySelector("#userText");
    this.validateBtn = document.querySelector("#button-v");
    this.Output = document.querySelector("#outPut");
  }

  PlaceHolder() {
    this.checkBtn.addEventListener("click", (e) => {
      let clicked = e.target.id;

      if (clicked === "Email") {
        this.messagePl.setAttribute("placeholder", "example@mail.com");
        this.messagePl.value = "";
        return clicked;
      } else if (clicked === "Phone-Number") {
        this.messagePl.setAttribute("placeholder", "01xxx-xxxxxx");
        this.messagePl.value = "";

        return clicked;
      } else if (clicked === "Post-Code") {
        this.messagePl.setAttribute("placeholder", "3300");
        this.messagePl.value = "";
        return clicked;
      }
    });
  }

  Validate() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      let userText = this.messagePl.value;

      let menus = document.querySelectorAll("input");
      menus = Array.from(menus);
      menus.pop();
      let message;
      let value;

      menus.forEach((menu) => {
        if (menu.checked) {
          message = menu.checked;
          value = menu.value;
        }
      });
      let re;
      let result;
      switch (message) {
        case value === "email" && message:
          re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
          RegExp(userText, re);
          break;
        case value === "phoneNum" && message:
          re = /^(\+)?(88)?01[0-9]{9}$/;
          RegExp(userText, re);
          break;
        case value === "postCode" && message:
          console.log(message, value);
          re = /^[0-9]{4}$/;
          RegExp(userText, re);
          console.log(result);
          break;
        default:
          let text = "No value found";
      }

      // Regular Expression
      function RegExp(userText, re) {
        let result;
        if (re.test(userText)) {
          result = ui.Output.textContent = "Your Input is Valid";
          ui.Output.className = "alert alert-success mb-0 ";
        } else {
          result = ui.Output.textContent = "Your Input is Invalid";
          ui.Output.className = "alert alert-danger mb-0 ";
        }

        return result;
      }
    });
  }
}

let ui = new UI();

ui.PlaceHolder();
ui.Validate();

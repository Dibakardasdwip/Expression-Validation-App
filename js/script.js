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
        ui.Output.className = "alert alert-primary mb-0 ";
        ui.Output.textContent = "Validate Your User Input";
        return clicked;
      } else if (clicked === "Phone-Number") {
        this.messagePl.setAttribute("placeholder", "01xxx-xxxxxx");
        this.messagePl.value = "";
        ui.Output.textContent = "Validate Your User Input";
        ui.Output.className = "alert alert-primary mb-0 ";

        return clicked;
      } else if (clicked === "Post-Code") {
        this.messagePl.setAttribute("placeholder", "3300");
        this.messagePl.value = "";
        ui.Output.textContent = "Validate Your User Input";
        ui.Output.className = "alert alert-primary mb-0 ";

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
          re = /^[0-9]{4}$/;
          RegExp(userText, re);
          break;
        default:
          let text = "No value found";
      }

      // Regular Expression
      function RegExp(userText, re) {
        let result;
        if (re.test(userText)) {
          document.querySelector("#outPut").parentElement.innerHTML = `
          <div class="text-center">
           <div class="spinner-border text-info" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        `;
          setTimeout((e) => {
            document.querySelector("#outputCard").innerHTML = `
              <h1 id="outPut" class="alert alert-success mb-0">
                Your Input is Valid
              </h1>`;
          }, 200);
        } else {
          document.querySelector("#outPut").parentElement.innerHTML = `
          <div class="text-center">
          <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        `;

          setTimeout((e) => {
            document.querySelector("#outputCard").innerHTML = `
              <h1 id="outPut" class="alert alert-danger mb-0">
                Your Input is Invalid
              </h1>`;
          }, 200);
        }

        return result;
      }
    });
  }
}

let ui = new UI();

ui.PlaceHolder();
ui.Validate();

// setTimeout((e) => {
//   document.querySelector("#output").innerHTML = `
//   <div class="spinner-border" role="status">
//   <span class="visually-hidden">Loading...</span>
// </div>
//   `;
// }, 2000);

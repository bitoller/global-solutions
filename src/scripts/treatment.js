function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");

  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "../assets/img/menuIcon.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "../assets/img/menuIcon.svg";
  }
}

function displayRadioResult() {
  let selectedOption = document.querySelector(
    "input[name='mortality']:checked"
  );

  if (selectedOption) {
    let textResult = "";

    if (selectedOption.value === "yes") {
      textResult = "Você escolheu SIM. Isso é ótimo!";
    } else {
      textResult = "Você escolheu NÃO. Talvez na próxima vez!";
    }
    document.querySelector("#result").innerText = textResult;
  }
}

function modalInputReset() {
  document.getElementById("myForm").reset();
  document.getElementById("result").innerText =
    "Preencha o questionário para ver seu resultado.";
}

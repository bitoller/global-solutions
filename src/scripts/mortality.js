function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "../assets/img/menuIcon.svg";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "../assets/img/menuIcon.svg";
  }
}





function handleModal() {
  const buttonModal = document.querySelector("#btn-mortality");
  buttonModal.addEventListener("click", openModal);
}

function openModal() {
  const modalContainer = document.querySelector("#modal-container");
  modalContainer.showModal();

  closeModal();
}

function closeModal() {
  const buttonCloseModal = document.querySelector("#close-modal");
  const modalContainer = document.querySelector("#modal-container");
  buttonCloseModal.addEventListener("click", () => {
    let radioOptions = document.getElementsByName("mortality");
    for (let i = 0; i < radioOptions.length; i++) {
      radioOptions[i].checked = false;
    }
    document.getElementById("result").innerText = "";
    modalContainer.close();
  });
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

handleModal();

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
  let vaccinesOption = document.querySelector("input[name='vaccines']:checked");
  let handWashOption = document.querySelector(
    "input[name='hand-wash']:checked"
  );
  let maskOption = document.querySelector("input[name='mask']:checked");

  if (vaccinesOption && handWashOption && maskOption) {
    let textResult = "";

    if (
      vaccinesOption.value == "good" &&
      handWashOption.value == "good" &&
      maskOption.value == "good"
    ) {
      textResult =
        "Parabéns pelo seu comprometimento em usar máscara, lavar as mãos e tomar vacina. Essas ações demonstram responsabilidade e cuidado com a saúde, contribuindo para a segurança coletiva.";
    } else if (
      (vaccinesOption.value == "good" || vaccinesOption.value == "okay") &&
      (handWashOption.value == "good" || handWashOption.value == "okay") &&
      maskOption.value == "bad"
    ) {
      textResult =
        "Você já tem boas práticas. Incentivamos o uso da máscara para proteger a saúde de todos. Considere essa prática essencial.";
    } else if (
      (maskOption.value == "good" || maskOption.value == "okay") &&
      (handWashOption.value == "good" || handWashOption.value == "okay") &&
      vaccinesOption.value == "bad"
    ) {
      textResult =
        "Você já tem boas práticas. Destacamos a importância da vacinação para proteger sua saúde e a comunidade. Considere tomar a vacina como um passo fundamental para a segurança coletiva.";
    } else if (
      (vaccinesOption.value == "good" || vaccinesOption.value == "okay") &&
      (maskOption.value == "good" || maskOption.value == "okay") &&
      handWashOption.value == "bad"
    ) {
      textResult =
        "Você já tem boas práticas. Destacamos a relevância de lavar as mãos para a saúde pessoal e coletiva. Incorporar esse hábito é crucial para prevenir doenças. Considere torná-lo parte de sua rotina diária.";
    } else if (
      (vaccinesOption.value == "good" || vaccinesOption.value == "okay") &&
      (handWashOption.value == "good" || handWashOption.value == "okay") &&
      (maskOption.value == "good" || maskOption.value == "okay")
    ) {
      textResult =
        "Seu comprometimento em manter práticas de prevenção da saúde está em um nível mediano para ótimo. Apresentamos abaixo na página alguns tópicos para melhorar seus hábitos e buscar uma vida mais saudável.";
    } else if (
      vaccinesOption.value == "bad" &&
      handWashOption.value == "bad" &&
      maskOption.value == "bad"
    ) {
      textResult =
        "Incentivamos a adoção de práticas como usar máscara, lavar as mãos e tomar vacina para preservar a saúde. Esses cuidados contribuem para a segurança coletiva. Considere incorporar essas medidas em sua rotina.";
    } else {
      textResult =
        "Precisa melhorar a atenção às práticas de saúde. Sugerimos mais dedicação, pois é crucial para o bem-estar pessoal e coletivo.";
    }
    document.querySelector("#result").innerText = textResult;
  } else {
    textResult =
      "Você deixou alguma resposta em branco. Por favor responda todas as perguntas para ver seu resultado.";
    document.querySelector("#result").innerText = textResult;
  }
}

function modalInputReset() {
  document.getElementById("myForm").reset();
  document.getElementById("result").innerText =
    "Preencha o questionário para ver seu resultado.";
}

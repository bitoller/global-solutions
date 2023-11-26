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
  let physicalActivityOption = document.querySelector(
    "input[name='physical-activity']:checked"
  );
  let foodHabitOption = document.querySelector(
    "input[name='food-habit']:checked"
  );
  let sleepHabitOption = document.querySelector(
    "input[name='sleep-habit']:checked"
  );
  let riskBehaviorOption = document.querySelector(
    "input[name='risk-behavior']:checked"
  );
  let healthCheckOption = document.querySelector(
    "input[name='health-check']:checked"
  );

  if (
    physicalActivityOption &&
    foodHabitOption &&
    sleepHabitOption &&
    riskBehaviorOption &&
    healthCheckOption
  ) {
    let textResult = "";

    if (
      physicalActivityOption.value == "good" &&
      foodHabitOption.value == "good" &&
      sleepHabitOption.value == "good" &&
      riskBehaviorOption.value == "good" &&
      healthCheckOption.value == "good"
    ) {
      textResult =
        "Você leva uma vida notavelmente saudável. Parabéns pelo cuidado com a saúde!";
    } else if (
      (foodHabitOption.value == "good" || foodHabitOption.value == "okay") &&
      (sleepHabitOption.value == "good" || sleepHabitOption.value == "okay") &&
      (riskBehaviorOption.value == "good" ||
        riskBehaviorOption.value == "okay") &&
      (healthCheckOption.value == "good" ||
        healthCheckOption.value == "okay") &&
      physicalActivityOption.value == "bad"
    ) {
      textResult =
        "A falta de atividade física pode levar a uma série de problemas de saúde, incluindo ganho de peso, redução da energia e maior suscetibilidade a condições médicas adversas.";
    } else if (
      (physicalActivityOption.value == "good" ||
        physicalActivityOption.value == "okay") &&
      (sleepHabitOption.value == "good" || sleepHabitOption.value == "okay") &&
      (riskBehaviorOption.value == "good" ||
        riskBehaviorOption.value == "okay") &&
      (healthCheckOption.value == "good" ||
        healthCheckOption.value == "okay") &&
      foodHabitOption.value == "bad"
    ) {
      textResult =
        "Uma alimentação inadequada pode resultar em diversos problemas de saúde, incluindo falta de energia, ganho de peso excessivo e impactos negativos no funcionamento geral do corpo.";
    } else if (
      (foodHabitOption.value == "good" || foodHabitOption.value == "okay") &&
      (physicalActivityOption.value == "good" ||
        physicalActivityOption.value == "okay") &&
      (riskBehaviorOption.value == "good" ||
        riskBehaviorOption.value == "okay") &&
      (healthCheckOption.value == "good" ||
        healthCheckOption.value == "okay") &&
      sleepHabitOption.value == "bad"
    ) {
      textResult =
        "A falta de descanso prejudica a saúde, impactando negativamente o sistema imunológico, aumentando o estresse e comprometendo o funcionamento cognitivo.";
    } else if (
      (foodHabitOption.value == "good" || foodHabitOption.value == "okay") &&
      (sleepHabitOption.value == "good" || sleepHabitOption.value == "okay") &&
      (physicalActivityOption.value == "good" ||
        physicalActivityOption.value == "okay") &&
      (healthCheckOption.value == "good" ||
        healthCheckOption.value == "okay") &&
      riskBehaviorOption.value == "bad"
    ) {
      textResult =
        "O consumo de tabaco, bebidas alcoólicas e drogas prejudica a saúde, aumentando o risco de doenças, comprometendo o bem-estar mental e físico.";
    } else if (
      (foodHabitOption.value == "good" || foodHabitOption.value == "okay") &&
      (sleepHabitOption.value == "good" || sleepHabitOption.value == "okay") &&
      (riskBehaviorOption.value == "good" ||
        riskBehaviorOption.value == "okay") &&
      (physicalActivityOption.value == "good" ||
        physicalActivityOption.value == "okay") &&
      healthCheckOption.value == "bad"
    ) {
      textResult =
        "Procure ir mais ao médico para realização de exames e check-ups de rotina, a maioria das doenças descobertas de forma precoce são remediáveis!";
    } else if (
      (foodHabitOption.value == "good" || foodHabitOption.value == "okay") &&
      (sleepHabitOption.value == "good" || sleepHabitOption.value == "okay") &&
      (riskBehaviorOption.value == "good" ||
        riskBehaviorOption.value == "okay") &&
      (healthCheckOption.value == "good" ||
        healthCheckOption.value == "okay") &&
      (physicalActivityOption.value == "good" ||
        physicalActivityOption.value == "okay")
    ) {
      textResult =
        "Você leva uma vida razoavelmente saudável. Logo abaixo na página, temos alguns tópicos sobre hábitos para uma vida mais saudável.";
    } else if (
      foodHabitOption.value == "bad" &&
      sleepHabitOption.value == "bad" &&
      riskBehaviorOption.value == "bad" &&
      healthCheckOption.value == "bad" &&
      physicalActivityOption.value == "bad"
    ) {
      textResult =
        "Diante de uma saúde bastante comprometida, apresentamos abaixo na página alguns tópicos para melhorar seus hábitos e buscar uma vida mais saudável.";
    } else {
      textResult =
        "Você está deixando passar alguns hábitos saudáveis, é possível aprimorar ainda mais sua abordagem para uma vida mais saudável. Confira abaixo algumas sugestões para otimizar seus cuidados e não perder nenhum hábito benéfico.";
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

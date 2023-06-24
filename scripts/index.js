  function handleQuestion1(answer) {
    if (answer === "no") {
      document.getElementById("question1").classList.add("hidden");
      document.getElementById("question2").classList.remove("hidden");
    } else {
      document.getElementById("question1").classList.add("hidden");
      // document.getElementById("content").classList.remove("hidden");
      startCamera();
      document.getElementById("finalMessage").innerText =
        "Then, no worries!";
    }
  }

  function handleQuestion2(answer) {
    document.getElementById("question2").classList.add("hidden");
    // document.getElementById("content").classList.remove("hidden");
    if (answer === "yes") {
      document.getElementById("finalMessage").innerText =
        "Okay then go do it!";

      startCamera();
    } else {
      document.getElementById("finalMessage").innerText =
        "Then, no worries!";
      startCamera();
    }
  }
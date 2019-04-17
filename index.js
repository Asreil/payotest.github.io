const codeOptions = document.querySelector(".add-new-codes .options"),
      manually = document.querySelector(".manually-content"),
      asFiles = document.querySelector(".as-files-content");

const inputArea = manually.querySelector(".input-area");

const editor = CodeMirror.fromTextArea(inputArea, {
    lineNumbers: true
});

const disableOptionsState = () => {
    const options = codeOptions.querySelectorAll(".option.active");

    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("active");
    }

};

codeOptions.addEventListener("click", event => {
    const target = event.target;
    const option = target.closest('.option');

    if (!option) return;
    if (!codeOptions.contains(option)) return;

    disableOptionsState();
    option.classList.add("active");

    if (option.classList.contains("manually")) {
        manually.style.display = "block";
        asFiles.style.display = "none";
    } else if (option.classList.contains("as-files")) {
        asFiles.style.display = "block";
        manually.style.display = "none";
    }
});
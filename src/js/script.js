export const script = () => {

const textArea = document.querySelector("#textArea");
const buttons = document.querySelectorAll(".button");
const visualizationDiv = document.querySelector("#visualizationDiv");
const buttonsTable = [...buttons];
buttonsTable.forEach(button => {
    button.addEventListener("click", function() {
        if (button.id === "checkVisualization" ) {
            visualizationDiv.innerHTML = textArea.value;
        }
    })
});




}
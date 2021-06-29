export const script = () => {

const textArea = document.querySelector("#textArea");
const buttons = document.querySelectorAll(".button");
const variablesDiv = document.querySelector(".variables")
const variableName = document.querySelector("#variableName");
const visualizationDiv = document.querySelector("#visualizationDiv");
const buttonsTable = [...buttons];



buttonsTable.forEach(button => {
    button.addEventListener("click", function() {
        if (button.id === "checkVisualizationButton" ) {
            visualizationDiv.innerHTML = textArea.value;
        }
        if (button.id === "addVariableButton" ) {

        }
        if (button.id === "downloadHtmlButton" ) {
           downloadHtml("index.html.html",textArea.value);
        }
    })
});


function downloadHtml(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + 
    encodeURIComponent(text));
    element.setAttribute('download', filename);
     element.style.display = 'none';
     document.body.appendChild(element);
     element.click();
     document.body.removeChild(element);
   }
}
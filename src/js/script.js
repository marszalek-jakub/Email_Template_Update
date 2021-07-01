export default () => {

const textArea = document.querySelector("#textArea");
const buttons = document.querySelectorAll(".button");
const variablesDiv = document.querySelector(".variables")
const variableName = document.querySelector("#variableName");
const visualizationDiv = document.querySelector("#visualizationDiv");
const buttonsTable = [...buttons];


let id = 0;
let tabinput = [];

buttonsTable.forEach(button => {
    button.addEventListener("click", function() {
        if (button.id === "checkVisualization-Button" ) {

            if(id > 0) {
                for(let i=0; i<tabinput.length; i++){
                    const inputt = document.querySelector(`#input-${i}`);
                    const textt = document.querySelector(`#textArea-${i}`);
                    console.log(inputt);
                    console.log(textt);

                    if(textArea.value.includes(inputt.value)){
                                textArea.value = textArea.value.replace(`<${inputt.value}>`,`${textt.value}`)
                            }
                }
            }

            visualizationDiv.innerHTML = textArea.value;
        }
        if (button.id === "addVariable-Button" ) {
            addVariables();
        }
        if (button.id === "downloadHtml-Button" ) {
           downloadHtml("index.html.html",textArea.value);
        }
    })
});


function addVariables(){
    const input = document.createElement("input");
            const textArea = document.createElement("textArea");
            const div = document.createElement("div");

            let concat = "#id-"+id;
            variablesDiv.appendChild(div).setAttribute("id","id-"+id);
            const divFlexbox = document.querySelector(concat);
            divFlexbox.classList.add("flex-box")
            tabinput.push(concat);
            console.log(tabinput);
            divFlexbox.appendChild(input).setAttribute("id","input-"+id);;
            divFlexbox.appendChild(input).value = variableName.value;
            divFlexbox.appendChild(textArea).setAttribute("id","textArea-"+id);;
            id++;
            
            variableName.value = "";
}

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
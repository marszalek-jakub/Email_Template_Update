//export default () => {

const textArea = document.querySelector("#textArea");
const buttons = document.querySelectorAll(".button");
const variablesDiv = document.querySelector(".variables")
const variableName = document.querySelector("#variableName");
const visualizationDiv = document.querySelector("#visualizationDiv");
const buttonsTable = [...buttons];



let tabinput = [];

buttonsTable.forEach(button => {
    button.addEventListener("click", function() {
        if (button.id === "checkVisualization-Button" ) {
            checkVisualization();
        }
        if (button.id === "addVariable-Button" ) {
            addVariables();
        }
        if (button.id === "downloadHtml-Button" ) {
           downloadHtml("index.html.html",textArea.value);
        }
    })
});

let amountId = 0;

function addVariables(){
    const input = document.createElement("input");
            const textArea = document.createElement("textArea");
            let div = document.createElement("div");
            let divRemove = document.createElement("div");

            let concat = "#id-"+amountId;
            variablesDiv.appendChild(div).setAttribute("id","id-"+amountId);
            const divFlexbox = document.querySelector(concat);
            divFlexbox.classList.add("flex-box")
            tabinput.push(concat);
            divFlexbox.appendChild(input).setAttribute("id","input-"+amountId);;
            divFlexbox.appendChild(input).value = variableName.value;
            divFlexbox.appendChild(textArea).setAttribute("id","textArea-"+amountId);
            divFlexbox.appendChild(divRemove).setAttribute("id","remove-"+amountId);
            const removeCss = document.querySelector("#remove-"+amountId);
            console.log(removeCss);
            removeCss.classList.add("cssCircle");
            removeCss.classList.add("minusSign");
            removeCss.innerHTML = "&#8211;";
            amountId++;
            
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

   function checkVisualization() {
    if(amountId > 0) {
        for(let i=0; i<tabinput.length; i++){
            const inputt = document.querySelector(`#input-${i}`);
            const textt = document.querySelector(`#textArea-${i}`);
            while(textArea.value.includes(inputt.value)){
                        textArea.value = textArea.value.replace(`$${inputt.value}$`,`${textt.value}`)
                    }
        }
    }

    visualizationDiv.innerHTML = textArea.value;
   }

let text = document.getSelection;
//}
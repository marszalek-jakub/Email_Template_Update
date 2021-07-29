//export default () => {

const textArea = document.querySelector("#textArea");
const buttons = document.querySelectorAll(".button");
const variablesDiv = document.querySelector(".variables")
const variableName = document.querySelector("#variableName");
const visualizationDiv = document.querySelector("#visualizationDiv");
const buttonsTable = [...buttons];
const redWarning = "#ff0033";
let errorText = document.querySelector(".errorText");





let tabinput = [];

buttonsTable.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id === "checkVisualization-Button" ) {
            checkVisualization();
        }
        if (button.id === "addVariable-Button" ) {
            addVariables();
        }
        if (button.id === "downloadHtml-Button" ) {
           downloadHtml("index.html.html",textArea.value);
        }
        if (button.id === "fillValues" ) {
            catchHtml()
            .catch(error => {console.error(error)});
         }
    })
});

let amountId = 0;

function addVariables(){
            const input = document.createElement("input");
            const input2 = document.createElement("input");
            let div = document.createElement("div");
            let divRemove = document.createElement("div");

            let concat = "#id-"+amountId;
            variablesDiv.appendChild(div).setAttribute("id","id-"+amountId);
            const divFlexbox = document.querySelector(concat);
            divFlexbox.classList.add("flex-box")
            tabinput.push(amountId);
            divFlexbox.appendChild(input).setAttribute("id","input-"+amountId);;
            divFlexbox.appendChild(input).value = variableName.value;
            divFlexbox.appendChild(input2).setAttribute("id","inputValue-"+amountId);
            divFlexbox.appendChild(divRemove).setAttribute("id","remove-"+amountId);
            const removeCss = document.querySelector("#remove-"+amountId);
            removeCss.classList.add("cssCircle");
            removeCss.classList.add("minusSign");
            removeCss.innerHTML = "&#8211;";
            amountId++;


            variableName.value = "";
    

            //Removing parent div function
                divRemove.addEventListener("click", ()=> {
                let num = divRemove.parentNode.id.replace(/^\D+/g, "");
                console.log(parseInt(num))
                for( var i = 0; i < tabinput.length; i++){ 
                    

                    if ( tabinput[i] === tabinput[parseInt(num)]) { 
                        console.log(tabinput)
                        console.log(tabinput.indexOf(i));

                        tabinput.splice(tabinput.indexOf(i), 1, null); 
                    }
                
                }
                divRemove.parentNode.parentNode.removeChild(divRemove.parentNode);
                })
               
            
                        
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
           if(tabinput[i] !== null){
            const inputt = document.querySelector(`#input-${tabinput[i]}`);
            const textt = document.querySelector(`#inputValue-${tabinput[i]}`);
            if(inputt.value!=="" && textt.value !==""){
                while (textArea.value.includes(`$${inputt.value}$`))
                textArea.value = textArea.value.replace(`$${inputt.value}$`,`${textt.value}`)

            }
            }

            else{
                if(inputt.value=="") inputt.style.backgroundColor = redWarning;
                
                if (textt.value=="") textt.style.backgroundColor = redWarning;

                errorText.textContent = "Niektóre zmienne lub wartości są puste"
            }
        }
    }
    visualizationDiv.innerHTML = textArea.value;
   }

async function catchHtml(){
    //fetch('http://xxxxxxxxx:xxxx/git-repos/Email_Template_Update/dist/sample.html')
    const response = await fetch("./sample.html");
    if(response.status !== 200) {
        textArea.value = textArea.value;
        console.error("No file sample.html")
    }
    else {
        const data = await response.text();
        textArea.value = data;
        console.log("Succesfully loaded sample code");
    }
   
}



//}
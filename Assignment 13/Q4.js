
class FormBuilder{
    constructor(fields){ this.fields=fields; }
    render(id){
        const form=document.getElementById(id);
        form.innerHTML="";
        this.fields.forEach(f=>{
            form.innerHTML+=`<label>${f.label}</label><input type='${f.type}' id='${f.label}'/><br>`;
        });
        form.innerHTML+=`<button onclick='getFormData()'>Submit</button>`;
    }
}
function getFormData(){
    const data={};
    document.querySelectorAll("input").forEach(inp=>data[inp.id]=inp.value);
    console.log(data);
}

function saveTask(){
    console.log("save is called");

}
function toogleImportant(){
    const nonImportant = "fa-regular fa-user"
    const isImportant = "fa-solid fa-user"

    $("#iImportant").removeClass(nonImportant).addclass(isImportant);




}

function init(){

    $("btnSave").click(saveTask);
}
window.onload = init
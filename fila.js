function adicionar(){

    let text = document.getElementById("cliente").value;
    let list = document.getElementById("lista").innerHTML;

    list += "<li>" +text+ "</li>"
    document.getElementById("lista").innerHTML = list;

}
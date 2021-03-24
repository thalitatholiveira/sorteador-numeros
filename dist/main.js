function onClickButton() {
    let min = document.getElementById("minimo").value;
    let max = document.getElementById("maximo").value;

    min = Math.ceil(min);
    max = Math.floor(max);

    let sort = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("resultado").innerHTML = sort;
}
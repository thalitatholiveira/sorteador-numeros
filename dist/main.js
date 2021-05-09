function onClickButton() {
    const amountSort = document.getElementById("amount").value;
    let min = document.getElementById("minimo").value;
    let max = document.getElementById("maximo").value;

    min = Math.ceil(min);
    max = Math.floor(max);

    let sort = [];

    if (amountSort > max) {
        alert('Não é possível sortear uma quantidade de números maior do que o intervalo do sorteio. Tente novamente!')
    } else if (amountSort > 999) {
        alert('A quantidade de números a sortear deve estar entre 1 e 999.')
    } else if (max > 999999) {
        alert('O intervalo numérico deve estar entre 0 e 999999.')
    } else {    
        for (let i = 0; i < amountSort; i++) {
            const sortedNumber = Math.floor(Math.random() * (max - min + 1)) + min;   
            sort.push(sortedNumber);     
        }
    
        let htmlSortedNumbers = '';
    
        for (let i = 0; i < sort.length; i++) {
            htmlSortedNumbers = `${htmlSortedNumbers}<p>${sort[i]}</p>`;
        }
    
        document.getElementById("result").innerHTML = `
            <div class="result-container">
                ${htmlSortedNumbers}
            </div>
        `;
    }
}

function clearButton() {
    clearAmount = document.querySelector('#amount')
    clearMinimo = document.querySelector('#minimo')
    clearMaximo = document.querySelector('#maximo')
    clearAmount.value = ""
    clearMinimo.value = ""
    clearMaximo.value = ""

    document.getElementById("result").innerHTML = null
}
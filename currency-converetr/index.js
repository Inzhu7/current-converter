const currencyFirstEL = document.getElementById("currency-first")

const worthFirstEL = document.getElementById("worth-first")

const currencySecondEL = document.getElementById("currency-second")

const worthSecondEL = document.getElementById("worth-second")

const exchangeRateEL = document.getElementById("exchange-rate")



function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/98577e8166385f3acebab0c1/latest/${currencyFirstEL.value}`)
        .then((res) => res.json())
        .then((data) => {
            const rate = data.conversion_rates[currencySecondEL.value];
            exchangeRateEL.innerText = `1 ${currencyFirstEL.value} = ${rate} ${currencySecondEL.value}`;
            worthSecondEL.value = (worthFirstEL.value * rate).toFixed(2);
        });
}

currencyFirstEL.addEventListener("change", updateRate)

currencySecondEL.addEventListener("change", updateRate)

worthFirstEL.addEventListener("input", updateRate)

updateRate()


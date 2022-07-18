let holyEggGain = D(0)

function updateAscension() {
    holyEggGain = data.bestRunMoney.gte(1e78) ? Decimal.sqrt(data.bestRunMoney.div(1e78)) : D(0)
}
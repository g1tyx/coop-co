let holyEggGain = D(0)
const milestoneDescs = ['Unlock an Egg Value Bonus','Automation and Start with 1 Chicken doesn\'t reset','']


function updateAscension() {
    holyEggGain = data.bestRunMoney.gte(1e78) ? Decimal.sqrt(data.bestRunMoney.div(1e78)) : D(0)
}

function ascend() {
    updateAscension
    if(data.bestRunMoney.lt(1e78) || data.inPath || data.onPlanet || contractActive()) return
    if(data.hasAscended === false) data.hasAscended = true

    data.holyEggs = data.holyEggs.plus(holyEggGain)
    data.enlightenments = new Array(5).fill(D(0))
    data.bestSoulEggs = data.soulEggs = data.prophecyEggs = D(0)
    data.epicResearch = new Array(11).fill(D(0))
    data.stats.timeInPrestige = D(0)
    data.hasPrestiged = true
    data.research = new Array(28).fill(D(0))
    eggValueBonus = D(1)
    chickenGain = D(0)
    layRate = D(1)
    data.chickens = D(0)
    data.money = D(0)
    data.bestRunMoney = D(0)
    data.currentEgg = 0
}
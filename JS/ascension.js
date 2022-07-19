let holyEggGain = D(0)
const milestoneDescs = ['Unlock an Egg Value Bonus','Automation and Start with 1 Chicken doesn\'t reset','Placeholder','Placeholder','Placeholder']
const milestoneReqs = [D(10),D(150),D(1),D(1),D(1)]
let milestoneBoosts = [D(1),D(1),D(1),D(1),D(1)]

function updateAscension() {
    holyEggGain = data.bestRunMoney.gte(1e78) ? Decimal.sqrt(data.bestRunMoney.div(1e78)) : D(0)
    milestoneBoosts[0] = Decimal.sqrt(data.holyEggs.times(0.5)).plus(1)
}

function updateAscensionHTML() {
    for(let i = 0; i < milestoneDescs.length; i++) {
        if(i === 0)
            DOMCacheGetOrSet(`milestone${i}`).innerText = data.milestones[i] === true ? `Milestone 0${i+1}\n${milestoneDescs[i]}\nBoost: ${format(milestoneBoosts[i])}x` : `Milestone 0${i+1}\n${milestoneDescs[i]}\nReq: ${format(milestoneReqs[i])} Holy Eggs`
        else 
            DOMCacheGetOrSet(`milestone${i}`).innerText = data.milestones[i] === true ? `Milestone 0${i+1}\n${milestoneDescs[i]}` : `Milestone 0${i+1}\n${milestoneDescs[i]}\nReq: ${format(milestoneReqs[i])} Holy Eggs`
        DOMCacheGetOrSet(`milestone${i}`).classList = data.milestones[i] === true ? 'milestoneUnlocked' : 'milestoneLocked'
    }
}

function updateMilestones() {
    for(let i = 0; i < 2; i++) {
        if(data.holyEggs.gte(milestoneReqs[i]) && !data.milestones[i])
            data.milestones[i] = true
    }
}

function ascend() {
    updateAscension
    if(data.bestRunMoney.lt(1e78) || data.inPath || data.onPlanet || contractActive()) return
    if(data.hasAscended === false) data.hasAscended = true

    data.holyEggs = data.holyEggs.plus(holyEggGain)
    data.enlightenments = new Array(5).fill(D(0))
    data.planetData = [{money: D(0), chickens: D(0), research: new Array(28).fill(D(0))},{money: D(0), chickens: D(0), research: new Array(28).fill(D(0))},{money: D(0), chickens: D(0), research: new Array(28).fill(D(0))},{money: D(0), chickens: D(0), research: new Array(28).fill(D(0))},{money: D(0), chickens: D(0), research: new Array(28).fill(D(0))},{money: D(0), chickens: D(0), research: new Array(28).fill(D(0))}]
    data.bestSoulEggs = data.soulEggs = data.prophecyEggs = D(0)
    if(!data.milestones[1]) {
        data.epicResearch = new Array(11).fill(D(0))
        data.autoActive = new Array(4).fill(false)
    }
    else {
        for(let i = 0; i < 6; i++) {
            data.epicResearch[i] = D(0)
        }
    }
    
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
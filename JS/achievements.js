const achievementNames = [
//Egg Discovery Section
'Eggcellent','Superegg','Meggdical','Rockegg Fuel','Uber Material','Fused','Quantum Flux','Fountain of Youth','Time and Space',
'Gravity Well','Diliuted','Prodigy Child','Terraforming Mars','Anti Anti Matter Club','Dark and Devious','EggI','Nebulous','Universal Problem','Egglightenment',
//Contracts Section
'Contracted','Contractual','Contractful','Contractor',
//Soul and Prophecy Section
'Soulful I','Soulful II','Soulful III','Soulful IV','Prophet I','Prophet II','Prophet III','Prophet IV',
//Planets and Knowledge
'Planetary I','Planetary II','Planetary III','Planetary IV','Planetary V','Planetary VI',
'Intelligent','Genius','Einstein','True Egglightenment',
//Ascension
'Ascended','Purified','Sanctified','Forgiven','Holy'
]

const achievementDescriptions = [
//Egg Discovery Section
'Start Playing!','Unlock the 2nd Egg','Unlock the 3rd Egg','Unlock the 4th Egg','Unlock the 5th Egg','Unlock the 6th Egg','Unlock the 7th Egg',
'Unlock the 8th Egg','Unlock the 9th Egg','Unlock the 10th Egg','Unlock the 11th Egg','Unlock the 12th Egg','Unlock the 13th Egg','Unlock the 14th Egg','Unlock the 15th Egg',
'Unlock the 16th Egg','Unlock the 17th Egg','Unlock the 18th Egg','Unlock the 19th Egg',
//Contracts Section
'Completed a Contract','Complete 10 Contracts','Complete 100 Contracts','Complete a Thousand Contracts',
//Soul and Prophecy Section
'Get 1 Thousand Soul Eggs','Get 1 Million Soul Eggs','Get 1 Billion Soul Eggs','Get 1 Trillion Soul Eggs',
'Get 10 Prophecy Eggs','Get 1 Thousand Prophecy Eggs','Get 1 Million Prophecy Eggs','Get 10 Million Prophecy Eggs',
//Planets and Knowledge
'Unlock the 1st Planet','Unlock the 2nd Planet','Unlock the 3rd Planet','Unlock the 4th Planet','Unlock the 5th Planet','Unlock the 6th Planet',
'Acquire 100 Knowledge','Acquire 1 Thousand Knowledge','Acquire 10 Thousand Knowledge','Acquire 1 Million Knowledge',
//Ascension
'Unlock Milestone 01','Unlock Milestone 02','Unlock Milestone 03','Unlock Milestone 04','Unlock Milestone 05'
]

function updateAchText(i) {
    DOMCacheGetOrSet('achHoverText').innerText = `[${i+1}] - ${achievementNames[i]}\n${achievementDescriptions[i]}`
}

for(let i = 0; i < achievementNames.length; i++) 
    DOMCacheGetOrSet('ach' + i).addEventListener('mouseover', () => updateAchText(i))

function getAchievement(i) {
    if(data.achievements[i] === true) return
    data.achievements[i] = true
    $.notify(`${achievementNames[i]} Unlocked!`,'success')
    updateAchClass()
    updateEggAchievements()
}
function updateEggAchievements() {
    for(let i = 0; i < data.unlockedEgg.length; i++) {
        if(data.unlockedEgg[i] === false && DOMCacheGetOrSet(`ach${i+1}`).getAttribute('src') !== `${eggImgPath}question.png`)
            DOMCacheGetOrSet(`ach${i+1}`).setAttribute('src',`${eggImgPath}question.png`)
        else if(data.unlockedEgg[i] === true && DOMCacheGetOrSet(`ach${i+1}`).getAttribute('src') !== `${eggImgPath}${eggData[i+1].id}.png`)
            DOMCacheGetOrSet(`ach${i+1}`).setAttribute('src',`${eggImgPath}${eggData[i+1].id}.png`)
    }
}
function checkAchievements() {
    //Eggs
    if(data.achievements[0] === false) getAchievement(0)
    for(let i = 1; i < 19; i++) {
        if(data.unlockedEgg[i-1] === true && data.achievements[i] === false) getAchievement(i)
    }
    //Soul and Prophecy
    const contractCompleteReq = [D(1),D(10),D(100),D(1e3)]
    for(let i = 19; i < 23; i++) {
        if(data.stats.contractsComplete.gte(contractCompleteReq[i-19]) && data.achievements[i] === false) getAchievement(i)
    }
    const soulAchReq = [D(1e3),D(1e6),D(1e9),D(1e12)]
    for(let i = 23; i < 27; i++)
        if(data.soulEggs.gte(soulAchReq[i-23]) && data.achievements[i] === false) getAchievement(i)
    const prophecyAchReq = [D(10),D(1e3),D(1e6),D(1e7)]
    for(let i = 27; i < 31; i++)
        if(data.prophecyEggs.gte(prophecyAchReq[i-27]) && data.achievements[i] === false) getAchievement(i)
    //Planets and Knowledge
    for(let i = 31; i < 37; i++)
        if(data.planetsDiscovered[i-31] === true && data.achievements[i] === false) getAchievement(i)
    const knowledgeAchReq = [D(100),D(1e3),D(1e4),D(1e6)]
    for(let i = 37; i < 41; i++)
        if(data.knowledge.gte(knowledgeAchReq[i-37]) && data.achievements[i] === false) getAchievement(i)
    for(let i = 41; i < 46; i++) 
        if(data.milestones[i-41] === true && data.achievements[i] === false) getAchievement(i)
    updateAchUnlockedCount()
}

function updateAchClass() {
    for(let i = 0; i < achievementNames.length; i++) {
            DOMCacheGetOrSet('ach'+i).classList = data.achievements[i] ? 'achUnlock' : 'achLock'
    }

}

function updateAchUnlockedCount() {
    const maxUnlock = data.achievements.length
    let unlocked = 0
    for(let i = 0; i < maxUnlock; i++)
        if(data.achievements[i] === true) unlocked++
    DOMCacheGetOrSet('achPercentText').innerText = `Achievements Unlocked: ${toPlaces(unlocked,0,unlocked+1)}/${toPlaces(maxUnlock,0,maxUnlock+1)} (${format((unlocked / maxUnlock) * 100)}%)`
}
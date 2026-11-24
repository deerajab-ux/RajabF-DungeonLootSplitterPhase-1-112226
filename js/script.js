const loot = []

const partyMembers = document.getElementById("partyMembers");

const lootName = document.getElementById("lootName");

const lootNumber = document.getElementById("lootNumber");

const addLootButton = document.getElementById("addLootButton");

const validationMessage = document.getElementById("validationMessage");

const list = document.getElementById("list");

const total = document.getElementById("total");

function addLoot()
{
    const itemName = lootName.value;
    const itemValue = Number(lootNumber.value);



    if (itemName === "" )
    {
        validationMessage.innerHTML = "you need to enter an item name";
    }
    else if (lootNumber.value === "" || isNaN(itemValue))
    {
        validationMessage.innerHTML = "you need to enter a valid number";
    }
    else if (itemValue < 0)
    {
        validationMessage.innerHTML = "must be a postive number";
    }
    else 
    {
        
    loot.push({name: itemName, value: itemValue}) 
    validationMessage.innerHTML = "";
    renderLoot()

};

function renderLoot()
{
        let totalValue = 0;
        let lootList = "";

    for (let i = 0; i < loot.length; i++)
    {
        lootList += "[" + (i + 1) + "] " + loot[i].name + " - " + loot[i].value + "-"
        totalValue += loot[i].value;
    }

    total.innerHTML = totalValue;
    list.innerHTML = lootList
    }
}
const loot = []

const partyMembers = document.getElementById("partyMembers");

const lootName = document.getElementById("LootName");

const lootNumber = document.getElementById("lootValue");

const addLootButton = document.getElementById("addlootButton");

const validationMessage = document.getElementById("validationMessage");

const list = document.getElementById("list");

const total = document.getElementById("totalLoot");

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
    loot.push({name: itemName, value: itemValue});
    validationMessage.innerHTML = "";
    lootName.innerHTML = "";
    lootNumber.innerHTML = "";
    renderLoot();
    }
};

function renderLoot()
{
        let totalValue = 0;
        let lootList = "";

    for (let i = 0; i < loot.length; i++)
    {
        lootList += "[" + (i + 1) + "] " + loot[i].name + " - " + loot[i].value + "<br>";
        totalValue += loot[i].value;
    }

    total.innerHTML = totalValue;
    list.innerHTML = lootList
    
}

addLootButton.addEventListener("click", addLoot)
var button = document.getElementById('click-button');


$(".modal-close-button").on("click", function () {
    document.getElementById('toRemove').remove();
    document.getElementById('toRemove').remove();
    document.getElementById('toRemove').remove();
    $('.hidden').hide();
});

$(".modal-accept-button").on("click", function () {
    document.getElementById('toRemove').remove();
    document.getElementById('toRemove').remove();
    document.getElementById('toRemove').remove();
    $('.hidden').hide();
});

button.onclick = function()
{

    $('.no-gender').hide();
    $('.no-unit').hide();
    $('.no-age').hide();
    $('.no-weight').hide();
    $('.not-number').hide();

    var tdee;
    var male = document.getElementById('male');
    var female = document.getElementById('female');
    var age = document.getElementById('age');
    var sel = document.getElementById('height');
    var activity = document.getElementById('activity');
    var weight = document.getElementById('weight');
    var kg = document.getElementById('kg');
    var lbs = document.getElementById('lbs');
   
    if (male.checked === false && female.checked === false)
    {
        $('.no-gender').show();
        return;
    }

    if (lbs.checked === false && kg.checked === false) {
        $('.no-unit').show();
        return;
    }

    if (age.value === "")
    {
        $('.no-age').show();
        return;
    }

    if (weight.value === "")
    {
        $('.no-weight').show();
        return;
    }

    if (isNaN(age.value) || isNaN(weight.value))
    {
        $('.not-number').show();
        return;
    }

    var height = sel.value;
    var weightVal = weight.value;
    height = height * 2.54;
    if (lbs.checked)
    {
        weightVal = weightVal * .453592;
    }

    if (male.checked)
    {
        tdee = 66 + (13.7 * weightVal) + (5 * height) - (4.7 * age.value);
    }

    else if (female.checked)
    {
        tdee = 665 + (9.6 * weightVal) + (1.8 * height) - (6.8 * age.value);
    }

    tdee = parseInt(tdee);
    var act = activity.value;
    tdee = parseInt(tdee) + parseInt(act);

    var reg = tdee;
    var gain = tdee + 500;
    var lose = tdee - 500;

    var regP = document.createElement('p');
    var gainP = document.createElement('p');
    var loseP = document.createElement('p');
    
    regP.textContent = reg + " kcals";
    gainP.textContent = gain + " kcals";
    loseP.textContent = lose + " kcals";

    regP.setAttribute("id", "toRemove");
    gainP.setAttribute("id", "toRemove");
    loseP.setAttribute("id", "toRemove");

    document.getElementById('reg-weight').appendChild(regP);
    document.getElementById('lose-weight').appendChild(loseP);
    document.getElementById('gain-weight').appendChild(gainP);

    $(".hidden").show();

    var newDiv = document.createElement('div');
    newDiv.classList.add('feed-box');

    
    var nh = document.createElement('div');
    nh.classList.add('feed-header');
    var newHeader = document.createElement('h3');
    var header = document.createTextNode("Total Daily Expenditure");
    newHeader.appendChild(header);
    nh.appendChild(newHeader)
    newDiv.appendChild(nh);

    var newLose = document.createElement('div');
    newLose.classList.add('feed-lose');
    var lLabel = document.createElement('label');
    var ltext = document.createTextNode('Lose Weight');
    lLabel.appendChild(ltext);
    newLose.appendChild(lLabel);
    var lPar = document.createElement('p');
    var lpText = document.createTextNode(lose + " kcal");
    lPar.appendChild(lpText);
    newLose.appendChild(lPar);
    newDiv.appendChild(newLose);

    var newMain = document.createElement('div');
    newMain.classList.add('feed-maintain');
    var mLabel = document.createElement('label');
    var mlText = document.createTextNode('Maintain Weight');
    mLabel.appendChild(mlText);
    newMain.appendChild(mLabel);
    var mp = document.createElement('p');
    mp.textContent = reg + " kcals";
    newMain.appendChild(mp);
    newDiv.appendChild(newMain);

    var newGain = document.createElement('div');
    newGain.classList.add('feed-gain');
    var gLabel = document.createElement('label');
    var glText = document.createTextNode('Gain Weight');
    gLabel.appendChild(glText);
    newGain.appendChild(gLabel);
    var gp = document.createElement('p');
    gp.textContent = gain + " kcals";
    newGain.appendChild(gp);
    newDiv.appendChild(newGain);

    if (document.getElementsByClassName("feed-box").length >= 6)
    {
        console.log("deleted");
        $('.feed-container .feed-box:last').remove().fadeOut(1000);
    }


    var parentNode = document.getElementsByClassName("feed-container");
    parentNode[0].prepend(newDiv).fadeIn(1000);


    /*
    console.log("male: " + male.checked);
    console.log("female: " + female.checked);
    console.log("Age: " + age.value);
    console.log("Height: " + height);
    console.log("weight: " + weightVal);
    console.log("lbs: " + lbs.checked);
    console.log("kg: " + kg.checked);
    console.log("activity: " + activity.value);
    */
    console.log("feed-box size: " + document.getElementsByClassName("feed-box").length);
};

$(document).ready(main);
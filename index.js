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

    var reg = tdee;
    var gain = tdee + 500;
    var lose = tdee - 500;

    var regP = document.createElement('p');
    var gainP = document.createElement('p');
    var loseP = document.createElement('p');
    
    regP.textContent = reg;
    gainP.textContent = gain;
    loseP.textContent = lose;

    regP.setAttribute("id", "toRemove");
    gainP.setAttribute("id", "toRemove");
    loseP.setAttribute("id", "toRemove");

    document.getElementById('reg-weight').appendChild(regP);
    document.getElementById('lose-weight').appendChild(loseP);
    document.getElementById('gain-weight').appendChild(gainP);

    $(".hidden").show();

    console.log("male: " + male.checked);
    console.log("female: " + female.checked);
    console.log("Age: " + age.value);
    console.log("Height: " + height);
    console.log("weight: " + weightVal);
    console.log("lbs: " + lbs.checked);
    console.log("kg: " + kg.checked);
};

$(document).ready(main);
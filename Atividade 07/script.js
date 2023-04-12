
const vowels = ['a', 'e', 'i', 'o', 'u'];

const countsVowels = (counterField) => {
    const lastValue = counterField.value.length-1;
    const valueCounterField = counterField.value.split('')[lastValue];
    const vowelsQuantity = document.getElementById('vowelsQuantity');

    if (vowels.includes(valueCounterField))
            vowelsQuantity.innerHTML++;
};
const adviceId = document.querySelector('.advice-id');
const quote = document.querySelector('.quote');
const button = document.querySelector('button');

button.addEventListener('click', async (e) => {
    e.preventDefault();

    await getAdvice();
    populate(returnedValues);
})

const getAdvice = async () => {
    try {
        const url = 'https://api.adviceslip.com/advice';
        const result = await axios.get(url);
        const adviceReturned = result.data.slip.advice;
        const idReturned = result.data.slip.id;

        return returnedValues = [adviceReturned, idReturned];
    } catch (e) {
        console.log(e);
    }
}

const populate = (returnedValues) => {
    quote.textContent = `"${returnedValues[0]}"`;
    adviceId.textContent = returnedValues[1];
}
export async function fetchedData(setDataFromFetch) {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    setDataFromFetch(data);
}
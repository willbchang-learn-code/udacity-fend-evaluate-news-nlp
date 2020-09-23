export async function handleSubmit(event, checkForUrl) {
    event.preventDefault();

    const form = document.getElementById('url')
    const formText = form.value;
    if (!checkForUrl(formText)) {
        alert("Please input a url!");
        form.value = '';
    }

    document.getElementById('results').innerHTML = await postData(formText)
}

export async function postData(url) {
    const response = await fetch('http://localhost:8080/url', {
        method: "POST",
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({url})
    });
    const result = await response.json();
    return result.label
}

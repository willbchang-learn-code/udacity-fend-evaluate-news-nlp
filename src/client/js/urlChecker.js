export function checkForURL(inputText) {
    const url_regex = /http[s]?:\/\/(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+/
    return url_regex.test(inputText)
}



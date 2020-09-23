import "regenerator-runtime/runtime"
import {checkForURL} from "./urlChecker";
import {postData} from "./formHandler";

test('The text should be URL', () => {
    expect(checkForURL('https://cli.github.com/')).toBe(true)
    expect(checkForURL('hello')).toBe(false)
});

test('PostData if defined', async () => {
    expect(postData()).toBeDefined();
});
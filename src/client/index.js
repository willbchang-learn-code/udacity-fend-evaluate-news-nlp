import {checkForURL} from './js/urlChecker'
import {handleSubmit} from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/footer.scss'

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

const form = document.getElementById('form');
form.addEventListener('submit',
    event => handleSubmit(event, checkForURL));
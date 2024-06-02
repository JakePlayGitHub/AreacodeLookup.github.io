const AreaCodeURL = "https://raw.githubusercontent.com/JakePlayGitHub/AreaCodeAPI/main/areacodes.json";

const LookupButton = document.getElementById('lookup-btn');
const AreaCode = document.getElementById('area-code');

function GetLocation(areaCode) {

    fetch(AreaCodeURL)
        .then(response => response.json())
        .then(data => {
            const location = data[areaCode]

            const messageDiv = document.createElement('div');
            const closeButton = document.createElement('button');
            const messageText = document.createElement('h3');

            messageDiv.id = "messageDiv";
            messageText.innerText = 'The location of ' + areaCode + ' is ' + location
            closeButton.innerText = 'Close'

            closeButton.classList.add('default-btn', 'blue')
            messageDiv.classList.add('message');
            messageDiv.appendChild(messageText);
            messageDiv.appendChild(closeButton);
            document.body.appendChild(messageDiv) ;

            closeButton.addEventListener('click', () => {
                messageDiv.remove()
            })
        })
        .catch(error => console.log(error))
};

LookupButton.addEventListener('click', () => {

    const messageDiv = document.getElementById('messageDiv');

    if (messageDiv) {
        console.warn("Already messageDiv created!");
    } else {
        GetLocation(AreaCode.value.trim())
    }
})
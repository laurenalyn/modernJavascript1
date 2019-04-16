
try {
    getClients(); 
} catch(error) {
    console.log(error); //will let us know if there is an error 
} finally {
    console.log('Execute always - no matter what!');
}


function getClients() {
    console.log('Downloading...');

    setTimeout(function () {
        console.log('Complete...');
    }, 3000);
}

getClients();
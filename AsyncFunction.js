async function getNumber(){
    await new Promise(resolve => setTimeout(resolve, 500));

    return Math.floor(Math.random() *100);
}

function callNumber(){
    getNumber().then(result => console.log(result));

}

callNumber();
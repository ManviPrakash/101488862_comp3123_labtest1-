// question 2
async function resolvedPromise() {
    let myPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'delayed success!' });
        }, 500);
    });
    return myPromise;
}

async function rejectedPromise() {
    let myPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject({ error: 'delayed exception!' });
        }, 500);
    });
    return myPromise;
}

// using async-await 
async function callPromises() {
    try {
        const success = await resolvedPromise();
        console.log(success);
        
        const failure = await rejectedPromise();
        console.log(failure);
    } catch (err) {
        console.error(err);
    }
}

callPromises();

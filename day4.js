//Q: What is a promise? What is its advantage over callbacks?
//We JavaScript mechanism to deal with assynchronous code -
//It's built in the language - its purpose is to wait some async operation to be fninshed
function getBeers() {
    //return promise - axios
    return new Promise(() => {
        //do some code like get info from a server
    })
}

getBeers()
    .then(() => {
    //after the promise is resolved
})
    .catch(() => {
    //catch the result in case an error
})

//Callbacks - is a JavaScript pattern - passing function inside other functions
function getBeers(resolve, reject) {
    //get beers from API
    setTimeout(() => {
        if (true) {
            resolve();
        } else {
            reject('error occurred');
        }
    }, 4000)
}

getBeers(() => {
   console.log('I got the beers'); 
}, () => {
    console.log('Error occurred');
});

//Async / await
async function getMyBeers() {
    let response = await getBeers();
}

//Q: What is a higher-order component?
//It's a component that wraps and returns another component
componentDidMount() {
    axios.get('https://usersWithAdminRole').then((users) => {
        this.setState({
            users: users
        })
    })
}

render() {
    return (
        <ListUsers usersList={this.state.users} />
    )
}

//Q: Design Patterns
//Known solutions for recurrent software engineering problems

//Singleton - Allows only one instance of an objet to be created
function DatabaseConnection () {

    let databaseInstance = null;
    
    // tracks the number of instances created at a certain time
    let count = 0;
    
    function init() {
        console.log(`Opening database #${count + 1}`);
    }
    function createIntance() {
        if(databaseInstance == null) {
            databaseInstance = init();
        }
        return databaseInstance;
    }
    function closeIntance() {
        console.log('closing database');
        databaseInstance = null;
    }
    return {
        open: createIntance,
        close: closeIntance
    }
}
    
const database = DatabseConnection();

let connection = DatabaseConnection();
connection.createIntance();
// https://codesource.io/javascript-design-patterns/

//Given the angle (in degrees) of the hour-hand, 
//return the time in HH:MM format. Round down to the nearest minute.
function whatTimeIsIt(angle) {
    //360 degrees in 12 hours
    //12*60 = 720 minutes
    //360 degrees / 720 minutes = 0.5 degrees
    let totalMinutes = Math.floor(angle/0.5);
    let hours = Math.floor(totalMinutes/60);
    let minutes = Math.floor(totalMinutes%60);

    if (hours === 0) {
        hours = '12';
    }

    if (angle === 0) {
        return '12:00';
    }

    if (String(minutes) < 2) {
        minutes = 0 + String(minutes);
    }

    if (String(hours) < 2) {
        hours = 0 + String(hours);
    }

    return hours + ":" + minutes;
}















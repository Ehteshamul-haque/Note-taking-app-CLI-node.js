// const msg = require("./utils"); // To access other path by using require
// const fs = require("fs"); // File System Module
// const validator = require("validator"); // Validator Npm Module
// const printMsg = msg();
// fs.writeFileSync("Message.txt", printMsg);
// console.log("note.js");

// //validator module

// const email = "ehtesham000@gmail.com";
// const isEmail = validator.isEmail(email);

// console.log(isEmail);







// // const fs = require('fs');
// // // fs.writeFileSync("myNote.txt", "Hello World!");
// // fs.appendFileSync("myNote.txt", `${"\n"}this is append!`)

const yargs = require('yargs');
yargs.version('1.1.0')



//Adding  yargs command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log("Title of new file = " + argv.title)
        console.log("Body of new file = " + argv.body)
    }
})

//Removing yargs command

yargs.command({
    command: 'remove',
    describe: 'Remove note',
    handler: function(){
        console.log("Removing note!");
    }
})

//list yargs command 

yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler: function(){
        console.log("Listing your notes!");
    }
})

//create read command

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log("Reading a notes!");
    }
})
// console.log(yargs.argv)

yargs.parse()

const {addNotes,removeNote,listNotes,readNotes}=require('./notes');
const yargs=require('yargs');

yargs.version('1.1.0');
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        addNotes(argv.title,argv.body);
    }
});

yargs.command({
    command:'remove',
    describe:'remove a new note',
    builder:{
        title:{
            describe:"Remove title",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        removeNote(argv.title);
    }
});

yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:"Read a Note",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
       readNotes(argv.title);
    }
});

yargs.command({
    command:'list',
    describe:'list the notes',
    handler(){
        listNotes();
    }
});

yargs.parse();
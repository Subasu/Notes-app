const fs = require('fs');

//add notes to json file
const addNotes = (title, body) => {
    const notes = getAllNotes();
    const duplicateTitle = notes.find((note) => note.title === title);
    if (!duplicateTitle) {
        notes.push({
            title,
            body
        })
        saveAllNotes(notes);
        console.log("New Note added!");
    }
    else {
        console.log('Title already taken!');
    }
}

//remove notes from json file
const removeNote = (title) => {
    const notes = getAllNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
    if (notes.length>notesToKeep.length) {
        saveAllNotes(notesToKeep);
        console.log("Note Removed Successfully")
    } else {
        console.log("No Such Note Present");
    }
}

//read notes by title
const readNotes=(title)=>{
    const notes=getAllNotes();
    const noteToRead=notes.find((note)=>note.title===title);
    if(noteToRead){
    console.log(noteToRead.title);
    console.log(noteToRead.body);
    }else{
        console.log('Note not Found');
    }
}

//List all the notes
const listNotes=()=>{
    const notes=getAllNotes();
    notes.forEach((note)=>console.log(note.title));
}

//get notes from json file
const getAllNotes = () => {
    try {
        const notes = fs.readFileSync('notes.json');
        const JSONnotes = notes.toString();
        return JSON.parse(JSONnotes);
    } catch (err) {
        return [];
    }
}

//save notes to json file
const saveAllNotes = (notes) => {
    const JSONdata = JSON.stringify(notes);
    fs.writeFileSync('notes.json', JSONdata);
}


module.exports = {
    addNotes,
    removeNote,
    listNotes,
    readNotes
}
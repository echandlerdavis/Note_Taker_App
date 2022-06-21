//Methods - get notes, read notes, add notes;

const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store{
    read(){
        return readFileAsync('./db/db.json', 'utf-8')
    }

    getNotes(){
        return this.read()
            .then((notes) => {
                let parsedNotes;
                try{
                    parsedNotes = [].concat(JSON.parse(notes));
                    return parsedNotes;
                } catch(err){
                    parsedNotes = [];
                    return parsedNotes;
                };
                    
            })
            .catch((err) => console.log(err));
    }
    write(notes){
        let newNote = JSON.stringify(notes);
        return writeFileAsync('./db/db.json', newNote)
    }
    addNote(note){
        let newNote = this.getNotes()
        return newNote
            .then((notes) => {
                return [...notes,
                     note];
            })
            .then((updatedNotes) => {this.write(updatedNotes)})
            .then(() => note)
            .catch((err) => console.log(err)) 
    }


}

module.exports = new Store()
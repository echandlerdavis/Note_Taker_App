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
                } catch(err){
                    parsedNotes = [];
                };
                    
                return parsedNotes
            })
    }
    write(notes){
        return writeFileAsync('./db/db.json', JSON.stringify(notes))
    }
    addNote(note){
        return this.getNotes()
            .then((notes) => {
                [...notes, note]
            })
            .then((updatedNotes) => {this.write(updatedNotes)})
            .then(() => note)
    }

}

module.exports = new Store()
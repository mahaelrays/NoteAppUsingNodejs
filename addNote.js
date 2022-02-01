const fs = require('fs')
const chalk = require('chalk')
const getNotes = function(){
    return ' your notes ...'
}
const addNote = function(title , body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=>note.title === title)
    if(duplicateNotes.length === 0 ){
       notes.push({
           title : title,
           body : body
       }) 
       saveNotes(notes)
       console.log("new note add")
    }else{
        console.log("note title token")
    }
}
const saveNotes = function(notes){
    const dataJson  = JSON.stringify(notes)
    fs.writeFileSync("notes.json",dataJson)
    console.log(chalk.green.inverse("note Save"))
}
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync("notes.json")
        const datajson = dataBuffer.toString()
        return JSON.parse(datajson)
    }catch(e){
        return []
    }
}
const removeNote = function(title){
//  console.log(title)
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=> note.title !== title )
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse("note removed"))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse("note removed"))
 
    }
    
}
 module.exports={
     getNotes: getNotes,
     addNote: addNote,
     loadNotes: loadNotes,
     removeNote: removeNote,
 }
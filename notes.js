const fs = require('fs')

const addNote = (title,body) =>{
    const notes = loadNotes() // []    [{title:"new1",body:"body1"}]
    const duplicatetitle=notes.fillter((obj)=>{
        return obj.title===title
    })
console.log(duplicatetitle)
if (duplicatetitle.length                                                                                ==0){

    notes.push({  // [{title:"new1",body:"body1"},{title:"new2",body:"body2"}]
        title:title,
        body
        
    })
    saveNotes(notes)
    console.log('saved sucssessfully')
}
else{
    console.log('error')

}
}
const loadNotes = () =>{
    // error (first time run)
    // const dataBuffer = fs.readFileSync('notes.json').toString()
    // return JSON.parse(dataBuffer) // Object
    try{

    const dataBuffer = fs.readFileSync('notes.json').toString()
    console.log(dataBuffer) //json
    return JSON.parse(dataBuffer) // Object // [{title:"new1",body:"body1"}]
    }
    catch{
        return []
    }
}

const saveNotes = (notes) =>{
    console.log(notes)

    const saveData = JSON.stringify(notes)
    console.log(saveData)
    fs.writeFileSync('notes.json',saveData)
}
/////////////////////////////////////
const deletenotes= (title,body) =>{
    const notes = loadNotes() // []    [{title:"new1",body:"body1"}]
    const notetokeep=notes.fillter((obj)=>{
        return obj.title!==title
    })
console.log(notetokeep)
saveNotes(notetokeep)
console.log('delete)')
}
module.exports = {
    addNote,
    deletenotes

}
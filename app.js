const fs=require('fs')
fs.writeFileSync('note.txt','helloooooooo')
console.log(fs.readFileSync('note.txt').toString())
///////////////////


const x = require('./data')
console.log(x)

console.log(x.fristname)
console.log(x.lname)
// console.log(x.sum(5,5))

const validator=require('validator')
console.log(validator.isEmail('osama'))
console.log(validator.isEmail('osama@gmai.com'))
console.log(process.argv)
console.log(process.argv[2])

const command=process.argv[2]
if(command==='add'){
    console.log('add items')
}

else if(command==='delete'){
    console.log('delete items')
}
else{
    console.log('error')
}
///////////////////////////////////////////

const yargs=require('yargs')

yargs.command({
    command:'add',
    describe:'add note',
    handler:()=>{
console.log('add note')
    }
})
yargs.command({
    command:'delete',
    describe:'delete note',
    handler:()=>{
console.log('delete note')
    }
})
yargs.command({
    command:'list',
    describe:'list note',
    handler:()=>{
console.log('list note')
    }
})
yargs.command({
    command:'read',
    describe:'read note',
    builder:{
        title:{
            describe:'this is title description',
            DOMException:true,
            type:'string'
        },
        body:{
            describe:'this is body  description',
            DOMException:true,
            type:'string'
        },
    },
    handler:()=>{
console.log('read note')
    }
})
console.log(yargs.argv)
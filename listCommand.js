const { argv } = require("process");
const yargs = require("yargs");
const notes = require("./addNote");
const chalk = require("chalk");
// yargs.version('1.1.0')
yargs.command({
  command: "list",
  describe: "list the note",
  handler(){
    // console.log('listing the note'+'title '+ argv.title)
    // console.log("body "+ argv.body)
    notes.getNotes();
  },
});
yargs.command({
  command: "add",
  describe: "add the new note",
  builder: {
    title: {
      describe: "note title",
      demanOptional: true,
      type: "string",
    },
    body: {
      describe: "note bady",
      demanOptional: true,
      type: "string",
    },
  },
  handler(argv) {
    // console.log('adding the new note')
    notes.addNote(argv.title, argv.body);
  },
});
yargs.command({
  command: "remove",
  describe: "remove the new note",
  builder: {
    title: {
      discribe: "note title",
      demanOptional: true,
      type: "string",
    },
  },
  handler(argv) {
    // console.log("removing the new note");
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: "read",
  describe: "read the new note",
  handler(argv) {
    // console.log('reading the note')
    notes.loadNotes(argv.title, argv.body);
  },
});
yargs.parse();
// console.log(yargs.argv)

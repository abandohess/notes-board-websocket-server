import NoteModel from '../models/notes_model';

export const createNote = (newNote) => {
  const note = new NoteModel();
  note.title = newNote.title;
  note.text = newNote.text;
  note.x = newNote.x;
  note.y = newNote.y;
  note.zIndex = newNote.zIndex;
  return note.save().then((result) => {
    console.log('save success');
  })
    .catch((error) => {
      console.log('save failure');
    });
};

export const getNotes = () => {
  return NoteModel.find({}).then((notes) => {
    return notes.reduce((result, item) => {
      result[item.id] = item;
      return result;
    }, {});
  }).catch((error) => {
    console.log('get failure');
  });
};

export const deleteNote = (id) => {
  // to quote Prof. Cormen: left as an exercise to the reader
  return NoteModel.findAndDeleteById(id).then((result) => {
    console.log('del success');
  })
    .catch((error) => {
      console.log('del failure');
    });
};

export const updateNote = (id, fields) => {
  return NoteModel.findById(id)
    .then((note) => {
    // check out this classy way of updating only the fields necessary
      Object.keys(fields).forEach((k) => {
        note[k] = fields[k];
      });
      return note.save();
    }).catch((error) => {
      console.log('update failure');
    });
};

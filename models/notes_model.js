import mongoose, { Schema } from 'mongoose';

const NotesSchema = new Schema({
  title: String,
  text: String,
  x: Number,
  y: Number,
  zIndex: Number,
}, {
  toJSON: {
    virtuals: true,
  },
});

// create model class
const NoteModel = mongoose.model('Note', NotesSchema);

export default NoteModel;

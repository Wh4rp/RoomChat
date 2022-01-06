const {Schema, model} = require('mongoose');

new MessageSchema = Schema (
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true
  }
);

module.exports = model('Message', MessageSchema);

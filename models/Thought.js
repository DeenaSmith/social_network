
const { Schema, model, Types } = require('mongoose');






//Initial comment schema
const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'Text required.',
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: string,
            required: 'Username required.'
        },
        // Validate data for a reaction
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);


ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);


module.exports = Thought;

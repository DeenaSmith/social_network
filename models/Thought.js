
const { TopologyDescription } = require('mongodb');
const { Schema, model, Types } = require('mongoose');


const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: string,
            required: 'Provide a reaction.',
            maxlength: 280
        },
        username: {
            type: string,
            required: 'Enter a username.'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);



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

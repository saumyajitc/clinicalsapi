import mongoose from "mongoose";

const clinicalSchema = new mongoose.Schema({
    componentName: String,
    componentValue: String,
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }
})

export default clinicalSchema
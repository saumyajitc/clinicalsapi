import mongoose from 'mongoose';
import patientSchema from './patient.model';

patientSchema.statics = {
    get: async function(query, cb) {
        try{
            const patients = await this.find()
            return patients
        }catch(err) { cb(err) }
    },
    getById: async function(query, cb) {
        try{
            const patient = await this.findOne(query)
            return patient
        }catch(err) { cb(err) }
     },
    create: async function(data, cb){
        try{
            const patient = this(data);
            const response = await patient.save();
            return response
        } catch(err){ cb(err) } 
    },
    update: async function (query, updateData, cb) {
        try{
            const response = await this.findOneAndUpdate(query, {$set: updateData});
            return response
        } catch(err) {cb(err)}
    },
    delete: async function(query, cb) {
        try{
            const response = await this.findOneAndDelete(query)
            return response
        } catch(err){cb(err)}
    }
}

const patientModel = mongoose.model("Patient", patientSchema, 'patients');

export default patientModel;
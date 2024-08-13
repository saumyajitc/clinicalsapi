import mongoose from 'mongoose';
import clinicalSchema from './clinical.model';

clinicalSchema.statics = {
    get: async function(query, cb) {
        try{
            const clinicals = await this.find(query)
            return clinicals
        }catch(err) { cb(err) }
    },
    getById: async function(query, cb) {
        try{
            const clinical = await this.findOne(query)
            return clinical
        }catch(err) { cb(err) }
     },
    create: async function(data, cb){
        try{
            const clinical = this(data);
            const response = await clinical.save();
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

const clinicalModel = mongoose.model("Clinicals", clinicalSchema, 'clinicals');

export default clinicalModel;
import dao from "./clinical.dao";
import mongoose from "mongoose";

export const getAllClinicalDetails = async (req, res) => {
    const result = await dao.get({patient: new mongoose.Types.ObjectId(req.params.patientId)}, (err) => {
        if(err) console.log(err);
    })
    res.send(result);
}

export const createClinicalDetails = async (req, res) => {
    const clinicals = req.body;
    const result = await dao.create(clinicals, (err) => {
        if(err) console.log(err);
    })
    result && res.status(200).send("Clinical details created succesfully!!");
}

export const updateClinicalDetails = async (req, res) => {
    const clinicalDetails = {
        "componentName": req.body.componentName,
        "componentValue": req.body.componentValue
    }
    const result = await dao.update({_id:req.params.id}, clinicalDetails, (err) => {
                        if(err) console.log(err);
                    })
    result && res.status(200).send("Clinical details updated successfully!!");
}

export const deleteClinicalDetails = async (req, res) => {
    const result = await dao.delete({_id:req.params.id}, (err) => {
                        if(err) console.log(err);
                    })
    result && res.status(200).send("Clinical details deleted successfully!!");
}
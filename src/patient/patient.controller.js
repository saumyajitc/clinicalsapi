import dao from "./patient.dao";

export const getAllPatients = async (req, res) => {
    const result = await dao.get({}, (err) => {
        if(err) console.log(err);
    })
    res.send(result);
}

export const getPatientById = async (req, res) => {
    const result =  await dao.getById({_id:req.params.id}, (err) => {
        if(err) console.log(err);
    })
    res.send(result);
}

export const createPatient = async (req, res) => {
    const patient = req.body;
    const result = await dao.create(patient, (err) => {
        if(err) console.log(err);
    })
    result && res.status(200).send("Patient created succesfully!!");
}

export const updatePatient = async (req, res) => {
    const patient = {
        "age": req.body.age,
    }
    const result = await dao.update({_id:req.params.id}, patient, (err) => {
                        if(err) console.log(err);
                    })
    result && res.status(200).send("Patient details updated successfully!!");
}

export const deletePatient = async (req, res) => {
    const result = await dao.delete({_id:req.params.id}, (err) => {
                        if(err) console.log(err);
                    })
    result && res.status(200).send("Patient details deleted successfully!!");
}
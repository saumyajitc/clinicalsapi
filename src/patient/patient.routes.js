import { getAllPatients, getPatientById, createPatient, updatePatient, deletePatient } from "./patient.controller";

const PATIENT_ROUTES = (router) => {
    router.get('/patient', getAllPatients);
    router.get('/patient/:id', getPatientById);
    router.post('/patient', createPatient);
    router.put('/patient/:id', updatePatient);
    router.delete('/patient/:id', deletePatient);
}

export default PATIENT_ROUTES
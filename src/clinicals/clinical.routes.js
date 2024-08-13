import { getAllClinicalDetails, createClinicalDetails, updateClinicalDetails, deleteClinicalDetails } from "./clinical.controller";

const CLINICALS_ROUTES = (router) => {
    router.get('/clinicals/:patientId', getAllClinicalDetails);
    router.post('/clinicals', createClinicalDetails);
    router.put('/clinicals/:id', updateClinicalDetails);
    router.delete('/clinicals/:id', deleteClinicalDetails);
}

export default CLINICALS_ROUTES
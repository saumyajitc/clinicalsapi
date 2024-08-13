import PATIENT_ROUTES from "./patient/patient.routes";
import CLINICALS_ROUTES from "./clinicals/clinical.routes";

export default (router) => {
    PATIENT_ROUTES(router),
    CLINICALS_ROUTES(router)
}
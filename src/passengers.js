import http from "./Http-comman";
class EemployeeService {

    getAll() {
        return http.get("www.coding-task.strakertranslations.com/passengers");
    }

}
export default new EemployeeService();
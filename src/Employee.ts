import {Salary} from "./Salary";

export interface Employee {
    id: string;
    cedula: string;
    name: string;
    phone: string;
    jobName: string;
    currentSalary?: Salary
}

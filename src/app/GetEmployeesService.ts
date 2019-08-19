import {Employees} from './Employee';

export class EmployeeServices{

    //Get All employees
    getEmployee() {
    
        const EMPLOYEE_DATA: Employees[] = [
            {code: "Inventory Management", empName: 'Ponmutharasan', designation: "Project Manager", department: 'https://github.com/algorithmica-repository/top20.git'},
            {code: "DashBoard", empName: 'Gabbar Singh', designation: "Team Leader", department: 'https://github.com/keen/dashboards.git'},
            {code: "Property Info", empName: 'M.S.Dhoni', designation: "Module Lead", department: 'https://github.com/symfony/property-info.git'},
            {code: "Resources", empName: 'Anand Kumar', designation: "Software Developer", department: 'https://github.com/sindresorhus/awesome.git'},
            {code: "PSAPs", empName: 'Prabhas', designation: "Sr. Software Developer", department: 'https://github.com/ddevault/pass-rotate.git'},
            {code: "Incident History", empName: 'Raana', designation: "Software Developer", department: 'https://github.com/ReactTraining/history.git'},
            {code: "Incident Master", empName: 'Mogamgo', designation: "Quality Analyst", department: 'https://github.com/tenancy/multi-tenant.git'},
            {code: "Tenant", empName: 'Dr.Dang', designation: "Quality Analyst", department: 'https://github.com/cgeo/cgeo.git'},
            {code: "LEA Users", empName: 'Shree Raam', designation: "Customer Support", department: 'https://github.com/request/request.git'},
            {code: "GEOCODING Api", empName: 'Mohan', designation: "Customer Support", department: 'https://gist.github.com/benschwarz/28769.js'},
            {code: "Request format", empName: 'Kiran', designation: "Team Leader", department: 'https://github.com/google/open-location-code.git'},
            {code: "Reverse GEOcoding", empName: 'Vignesh', designation: "Module Lead", department: 'http://api.db-ip.com/v2/free/192.30.254.5/countryName'},
            {code: "plus codes", empName: 'Arun', designation: "Software Developer", department: 'https://github.com/waldemarnt/http-status-codes.git'},
            {code: "IP address ", empName: 'Arul', designation: "Sr. Software Developer", department: 'https://github.com/in28minutes/spring-web-services.git'},
            {code: "Component mismatch", empName: 'Karthik', designation: "Software Developer", department: 'https://github.com/algorithmica-repository/top20.git'},
            {code: "Error message", empName: 'Prem', designation: "Quality Analyst", department: 'https://github.com/symfony/property-info.git'},
            {code: "Status codes", empName: 'Venugopal', designation: "Quality Analyst", department: 'https://github.com/cgeo/cgeo.git'},
            {code: "Web Services", empName: 'Lavanesh', designation: "Customer Support", department: 'https://github.com/keen/dashboards.git'},
            {code: "Location filter", empName: 'Divya', designation: "Customer Support", department: 'https://github.com/algorithmica-repository/top20.git'},
            ];
            return EMPLOYEE_DATA;
        }
}

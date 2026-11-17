
const fs = require("fs");
const path = require("path");
const Employee = require(".\Employee");
const folder = path.join(__dirname, "employees-data");

// סעיף 1 
const emp1 = new Employee("David", 1, 8000);
const emp2 = new Employee("Moshe", 2, 9000);
const emp3 = new Employee("Yaakov", 3, 10000);

// סעיף 2
fs.mkdirSync(folder, { recursive: true });

// סעיף 3: 
const file1 = path.join(folder, "employee1.txt");
fs.writeFileSync(file1, emp1.name, "utf8");

// סעיף 4:     
const file2 = path.join(folder, "employee2.txt");

function saveWithCallback(file, name) {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, name, "utf8", (err) => {
            if (err) {
                reject(err);
            } else {
                console.log("Employee 2 saved with callback");
                resolve();
            }
        });
    });
}

// סעיף 4:     Promise
const file3 = path.join(folder, "employee3.txt");

async function main() {
    try {
        await saveWithCallback(file2, emp2.name);

        await fs.promises.writeFile(
            file3,
            emp3.name,
            "utf8"
        );

        console.log("Employee 3 saved with Promise");

        // סעיף 5:       
        const randomNumber = Math.floor(Math.random() * 100) + 1;

        await fs.promises.appendFile(
            file2,
            "\n" + randomNumber,
            "utf8"
        );

        // סעיף 6:    
        const files = fs.readdirSync(folder);

        console.log("Files in employees-data:");
        console.log(files);

        console.log("All tasks completed");
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();

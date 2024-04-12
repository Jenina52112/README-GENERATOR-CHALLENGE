const generatereadme = require('./index');

describe('README Generator', () => {
    it('should generate README with project name and description', () => {
        const projectName = generatereadme.answers.title;
        const description = generatereadme.answers.description;
        const license = generatereadme.answers.license;
        const github = generatereadme.answers.username;

        const readmeContent = generatereadme(projectName, description, license, github);

        // Assert that the generated README contains the project name and description
        expect(readmeContent).toContain(projectName);
        expect(readmeContent).toContain(description);
    });

    it('should generate README with license information', () => {
        const projectName = generatereadme.answers.title;
        const description = generatereadme.answers.description;
        const license = generatereadme.answers.license;
        const github = generatereadme.answers.username;
        const readmeContent = generatereadme(projectName, description, license, githubLink);

        // Assert that the generated README contains license information
        expect(readmeContent).toContain(`This project is licensed under the ${license} license.`);
    });

    // Add more test cases as needed
});
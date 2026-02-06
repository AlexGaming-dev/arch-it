#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

async function build() {
    const blueprintPath = path.join(process.cwd(), 'blueprint.json');

    if (!fs.existsSync(blueprintPath)) {
        console.log(chalk.red("❌ Error: No blueprint.json found in this directory!"));
        return;
    }

    try {
        const blueprint = await fs.readJson(blueprintPath);
        console.log(chalk.blue.bold(`\n🏗️  Arch-It: Building "${blueprint.projectName}"...\n`));

        for (const [folder, files] of Object.entries(blueprint.structure)) {
            const folderPath = path.join(process.cwd(), folder);
            await fs.ensureDir(folderPath);
            console.log(`${chalk.green('DIR')}  ${folder}/`);

            for (const [fileName, content] of Object.entries(files)) {
                await fs.writeFile(path.join(folderPath, fileName), content);
                console.log(`${chalk.cyan('FILE')} ├── ${fileName}`);
            }
        }

        console.log(chalk.magenta.bold("\n✨ Construction complete! Project is ready.\n"));
    } catch (err) {
        console.error(chalk.red("Build failed:"), err);
    }
}

build().catch(err => console.error(err));
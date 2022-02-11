import axios from 'axios';
import fs from 'fs';

const fsp = fs.promises;

const table = await fsp.readFile("topnovels.md", {encoding: "utf-8"});

const matches = table.matchAll(/\[(.+)\]\((.+)\)/g);

for (const match of matches) {
    const series = match[1];
    const url = match[2];
}
#!/usr/bin/env node
const fs = require('fs');

/**
 * @return {string} -- Current month name
 */
const getCurrentMonthName = () => {
  const months = [ 
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec'
  ];
  return months[new Date().getMonth()];
};

/**
 * @return {string} -- ISO format of current date
 */
const getFormattedDate = () => {
  return new Date().toISOString().split('T')[0];
};

/**
 * 
 * @param {*} date -- ISO format of date to be set as the note header
 */
const formatHeader = date => {
  return `### Notes ${date}\n========================`;
};

/**
 * 
 * @param {*} month -- the current month for the notes path  
 */
const mkdir = month => {
  const path = `./notes/${month}`;
  if (!fs.existsSync(path)) {
    console.log('Looks like this is your first time running dev-note this month');
    fs.mkdirSync(path, { recursive: true });
    console.log('We made a "notes" directory for your notes. Happy writing!');
  }
  return path;
}

/**
 * Generates note as a markdown file
 */
const note = () => {
  const date = getFormattedDate();
  const header = formatHeader(date);
  const path = mkdir(getCurrentMonthName());
  const pathToNote = `${path}/${date}.md`;
  
  fs.writeFile(pathToNote, header, err => {
    if (err) throw err;
    console.log(`${pathToNote} successfully created!`);
  });
};

note();

[![Version](https://img.shields.io/npm/v/@lpcruz/dev-note.svg)](https://npmjs.org/package/@lpcruz/dev-note)
[![Build Status](https://travis-ci.com/lpcruz/dev-note.svg?branch=master)](https://travis-ci.com/lpcruz/dev-note)
# @lpcruz/dev-note

A node binary that auto-generates notes for you in markdown. 

#### Installation

```
$ npm install -g @lpcruz/dev-note
```

#### Making a note

Once you've successfully installed globally, you'll have access to the `dev-note` binary command. It will create a `notes` directory in your current working directory along with a markdown file with the current date:

```
cwd/
├── notes/
    ├── <MM-DD-YYYY>.md
```

The markdown file will already have a template with the current date:

```
### Notes <MM-DD-YYYY>
========================
```
